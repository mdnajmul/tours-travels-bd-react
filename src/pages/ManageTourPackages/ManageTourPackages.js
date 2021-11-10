import React, { useEffect, useState } from "react";

const ManageTourPackages = () => {
  const [allPackages, setAllPackages] = useState([]);
  const [allSpecialPackages, setAllSpecialPackages] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;
  let j = 1;

  useEffect(() => {
    fetch("http://localhost:5000/tourpackages")
      .then((res) => res.json())
      .then((data) => setAllPackages(data));
  }, [reload]);

  useEffect(() => {
    fetch("http://localhost:5000/specialpackages")
      .then((res) => res.json())
      .then((data) => setAllSpecialPackages(data));
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
            window.location.href = window.location.href;
          }
        });
    }
  };

  const handleSpecialDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      fetch(`http://localhost:5000/delteSpecialPackage/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Special Tour Package Deleted Successfully!");
            setReload(!reload);
            window.location.href = window.location.href;
          }
        });
    }
  };

  return (
    <div>
      {allPackages.length > 0 && (
        <section className="container">
          <h2 className="text-center text-success fw-bold mt-100 mb-3">
            ALL REGULAR TOUR PACKAGES
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
      )}
      {allSpecialPackages.length > 0 && (
        <section className="container">
          <h2 className="text-center text-success fw-bold mt-100 mb-3">
            ALL SPECIAL OFFER TOUR PACKAGES
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
              {allSpecialPackages.map((p) => (
                <tr>
                  <th scope="row">{j++}</th>
                  <td>{p?.name}</td>
                  <td>{p?.catagory}</td>
                  <td>BDT {p?.price}</td>
                  <td>
                    <button
                      onClick={() => handleSpecialDelete(p?._id)}
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
      )}
    </div>
  );
};

export default ManageTourPackages;
