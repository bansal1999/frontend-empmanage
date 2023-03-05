import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = () => {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((Response) => {
        setEmployee(Response.data);
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((Response) => {
        getAllEmployees();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">List Employees</h2>
        <Link to="/add-employee" className="btn btn-primary mb-5">
          Add Employee
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email-Id</th>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.id} </td>
                <td> {employee.firstName} </td>
                <td> {employee.lastName} </td>
                <td> {employee.emailId} </td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/edit-employee/${employee.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListEmployee;