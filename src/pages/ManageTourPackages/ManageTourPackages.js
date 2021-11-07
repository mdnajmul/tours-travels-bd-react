import React from "react";

const ManageTourPackages = () => {
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
            <th scope="col">Duration</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dhaka-Rangamati-Bandarban-Dhaka</td>
            <td>4 Nights 3 Days (2 Nights stay at Saint Martins Island)</td>
            <td>BDT 9500</td>
            <td>
              <button className="header-top-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dhaka-Rangamati-Bandarban-Dhaka</td>
            <td>4 Nights 3 Days (2 Nights stay at Saint Martins Island)</td>
            <td>BDT 9500</td>
            <td>
              <button className="header-top-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Dhaka-Rangamati-Bandarban-Dhaka</td>
            <td>4 Nights 3 Days (2 Nights stay at Saint Martins Island)</td>
            <td>BDT 9500</td>
            <td>
              <button className="header-top-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ManageTourPackages;
