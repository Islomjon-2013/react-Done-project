import React from "react";
import "./App.css";
const Table = () => {
  return (
    <div className="tableCount">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Product Price</th>
                  <th>
                    <div className="d-flex">
                      <button className="btn btn-danger mx-1">Delete</button>
                      <button className="btn btn-success mx-1">Edit</button>
                      <button className="btn btn-warning mx-1">Save</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Apple</td>
                  <td>$5</td>
                  <td>
                    <div className="d-flex">
                      <button className="btn btn-danger mx-1">Delete</button>
                      <button className="btn btn-success mx-1">Edit</button>
                      <button className="btn btn-warning mx-1">Save</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Orange</td>
                  <td>$15</td>
                  <td>
                    <div className="d-flex">
                      <button className="btn btn-danger mx-1">Delete</button>
                      <button className="btn btn-success mx-1">Edit</button>
                      <button className="btn btn-warning mx-1">Save</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
