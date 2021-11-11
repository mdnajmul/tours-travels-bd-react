import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  let { tourId } = useParams();
  const location = useLocation();
  const value = location.search;
  const email = sessionStorage.getItem("email");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user, packages, specialPackages } = useAuth();
  const onSubmit = (data) => {
    if (value === "?token=special") {
      const orderDetails = specialPackages.filter((p) => p._id === tourId);
      data.orderDetails = orderDetails;
    } else {
      const orderDetails = packages.filter((p) => p._id === tourId);
      data.orderDetails = orderDetails;
    }

    data.status = "pending";
    fetch("https://floating-citadel-82357.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Placced Successfully!");
          reset();
        }
      });
  };
  return (
    <div className="shipping-form mt-100">
      <div>
        <h2 className="text-center text-success fw-bold mb-3">
          Shipping Adress
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your name"
            readOnly
            defaultValue={user?.displayName}
            {...register("name")}
          />
          <input
            placeholder="Your email"
            readOnly
            defaultValue={email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your phone number"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your city"
            defaultValue=""
            {...register("city")}
          />
          <input
            placeholder="Your address"
            defaultValue=""
            {...register("address")}
          />
          <input className="header-top-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
