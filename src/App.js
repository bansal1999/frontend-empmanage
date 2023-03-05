import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/employees" element={<ListEmployee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<AddEmployee />} />
          </Routes>
        </BrowserRouter>
        {/* <ListEmployee /> */}
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
