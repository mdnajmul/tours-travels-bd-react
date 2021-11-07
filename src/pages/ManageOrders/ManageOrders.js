import React from "react";
import "./ManageOrders.css";

const ManageOrders = () => {
  return (
    <section className="container">
      <h2 className="text-center text-success fw-bold mt-100 mb-3">
        ALL ORDERS
      </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order Name</th>
            <th scope="col">User Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dhaka-Khulna-Dhaka</td>
            <td>ovi@gmail.com</td>
            <td>Pending</td>
            <td>
              <button className="update-btn me-3">Update Status</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ManageOrders;
