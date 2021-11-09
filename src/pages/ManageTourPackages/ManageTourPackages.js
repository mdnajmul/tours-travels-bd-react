import React, { useEffect, useState } from "react";

const ManageTourPackages = () => {
  const [allPackages, setAllPackages] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;

  useEffect(() => {
    fetch("http://localhost:5000/tourpackages")
      .then((res) => res.json())
      .then((data) => setAllPackages(data));
  }, [reload]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      fetch(`http://localhost:5000/delteTourPackage/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Tour Package Deleted Successfully!");
            setReload(!reload);
          }
        });
    }
  };

  return (
    <section className="container">
      <h2 className="text-center text-success fw-bold mt-100 mb-3">
        ALL TOUR PACKAGES
      </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allPackages.map((p) => (
            <tr>
              <th scope="row">{i++}</th>
              <td>{p?.name}</td>
              <td>{p?.catagory}</td>
              <td>BDT {p?.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(p?._id)}
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

export default ManageTourPackages;
