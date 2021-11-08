import React, { useEffect, useState } from "react";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [reload]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setReload(!reload);
        }
      });
  };

  return (
    <section className="container">
      <h2 className="text-center text-success fw-bold mt-100 mb-3">
        ALL ORDERS
      </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">User Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr>
              <th scope="row">{i++}</th>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.status}</td>
              <td>
                {order.status === "success" ? (
                  <button className="btn btn-secondary me-3" disabled>
                    Update Status
                  </button>
                ) : (
                  <button className="update-btn me-3">Update Status</button>
                )}
                <button
                  onClick={() => handleDelete(order?._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ManageOrders;
