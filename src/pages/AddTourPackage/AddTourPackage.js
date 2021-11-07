import React from "react";
import { useForm } from "react-hook-form";

const AddTourPackage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="shipping-form mt-100">
      <div>
        <h2 className="text-center mb-3 text-success fw-bold">
          Add New Tour Package
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Package Name*"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="error">This field is required</span>}
          <input
            placeholder="Cover Image Link*"
            {...register("img", { required: true })}
          />
          {errors.img && <span className="error">This field is required</span>}
          <input
            placeholder="Details Image Link 1"
            {...register("detailImg1")}
          />
          <input
            placeholder="Details Image Link 2"
            {...register("detailImg2")}
          />
          <input
            placeholder="Details Image Link 3"
            {...register("detailImg3")}
          />
          <select {...register("type")}>
            <option value="Standard Class">Standard Class</option>
            <option value="Economy Class">Economy Class</option>
            <option value="Bussiness Class">Bussiness Class</option>
          </select>
          <input
            placeholder="Total Duration*"
            {...register("duration", { required: true })}
          />
          {errors.duration && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Total Price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="error">This field is required</span>
          )}
          <textarea
            placeholder="Write Short Description About Spot"
            {...register("shortDetail")}
          />
          <textarea
            placeholder="Write Visited Places"
            {...register("visitedPlaces")}
          />
          <textarea placeholder="Facility Included" {...register("facility")} />
          <select {...register("country")}>
            <option value="">Destination</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Europe">Europe</option>
          </select>
          <select {...register("rating")}>
            <option value="0">Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input className="header-top-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddTourPackage;
