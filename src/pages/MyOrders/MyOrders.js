import React, { useEffect, useState } from "react";
import "./MyOrders.css";

const MyOrders = () => {
  const email = sessionStorage.getItem("email");
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
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
    <section id="bangladesh" className="container mt-100">
      <div>
        <h2 className="text-center text-success fw-bold">My All Orders</h2>
        <hr className="text-center text-red fw-bold" />
      </div>
      {orders.length === 0 && (
        <h3 className="txt-center text-warning">No Orders Found!</h3>
      )}
      <div className="home-services-field mt-3">
        {orders.length > 0 &&
          orders.map((order) => (
            // <Order key={order._id} order={order}></Order>
            <div className="package-field">
              <p className="ps-3 pe-3">
                <hr />
              </p>
              <h2 className="text-center mt-2 fs-6 fw-bold">
                {order?.orderDetails[0]?.name}
              </h2>
              <p className="text-center"></p>

              <div className="d-flex justify-content-around">
                <p>
                  <span className="fw-bold">Cost:</span>{" "}
                  <span className="text-danger fw-bold">
                    BDT {order?.orderDetails[0]?.price}
                  </span>
                </p>
                <p>
                  <span className="fw-bold">Status:</span>{" "}
                  <span
                    className={
                      order.status === "pending"
                        ? "text-danger fw-bold"
                        : "text-success fw-bold"
                    }
                  >
                    {order.status}
                  </span>
                </p>
              </div>
              <div className="mb-3 mt-3">
                {order?.status === "approved" ? (
                  <button
                    className="btn btn-secondary me-3"
                    style={{ marginLeft: "130px" }}
                    disabled
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(order?._id)}
                    className="delete-btn"
                    style={{ marginLeft: "100px" }}
                  >
                    Cancel
                  </button>
                )}
              </div>
              <p className="ps-3 pe-3">
                <hr />
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MyOrders;
