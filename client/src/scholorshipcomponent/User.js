import Card from "./Card";
import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FilterComponent from "./FilterComponent";

const FilterComponent = ({ filters, handleChange }) => {
  return (
    <div className="filter-component">
      <h3>Filters</h3>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={filters.degree}
          onChange={handleChange}
          placeholder="e.g. phd"
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="e.g. Mumbai.."
        />
      </div>
      <div>
        <label htmlFor="sortByDeadline">
          <input
            type="checkbox"
            id="sortByDeadline"
            name="sortByDeadline"
            checked={filters.sortByDeadline}
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          Sort by Deadline
        </label>
      </div>
    </div>
  );
};

function User() {
  const [filters, setFilters] = useState({
    location: "",
    degree: "",
    sortByDeadline: false,
    name: "",
  });

  console.log(filters);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [user, setUser] = useState({});
  let [isshown, setisshown] = React.useState(false);
  function toggle() {
    setisshown((prevstate) => !prevstate);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // API call.
        const response = await fetch(
          `http://localhost:5000/api/auth/getstudent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );

        const userData = await response.json();
        setUser(userData); // Update the user state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function inside useEffect
  }, []);

  const listStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    padding: 0, // Remove default padding
  };

  const listItemStyle = {
    marginRight: "10px", // Add spacing between items
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDegree, setIsOpenDegree] = useState(false);
  //   const {name, email, mo} = user;
  // console.log(user);
  const [country, setcountry] = React.useState("");
  const [degree, setdegree] = React.useState("");
  const [name, setname] = React.useState("");
  const [Country, setcountrydata] = React.useState();
  const [Degree, setdegreedata] = React.useState();

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setdata({Country:country,Degree:degree,Name:name})
    // navigate('/about')
    setcountrydata(country);
    setdegreedata(degree);
  };
  console.log(country);
  console.log(degree);
  console.log(name);
  return (
    <div className="dashboard">
      <aside className="search-wrap">
        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input
            type="text"
            class="form-control input-text"
            placeholder="Search scholarships...."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={filters.name}
            onChange={(e) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                name: e.target.value,
              }))
            }
          />
          <div class="input-group-append">
            <button class="btn btn-outline-primary btn-md" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        {/* <Dropdown/> */}
        <div className="user-actions">
          <button onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z" />
            </svg>
            {/* {isshown&&<FilterComponent/>} */}
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" />
              <path d="M11 2h2v10h-2z" />
            </svg>
          </button>
        </div>
      </aside>
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEVVYIDn7O3///9TXn/r8PBRXH5ncYxLV3rS19xIVHmwt8JNWXtEUXbj6erw9fQ6SHCepbTe4+bz9PbLztZ0fJVjbYp/hp3Y2uGssr+boLGMk6fk5eqVm61bZoWEi6DCx9C6v8qam2tsAAAK9ElEQVR4nN2d67ayOAyGq6UUaFVOKoIc7v8qh4NuEUFIUpX53h8za2atrTwmbdO0JGxLVxQryRlBXKq4DOkPwoh/H56v+qAoJJ3UQV/PVB4STJhVsXZJRnmIuzquMhIPASZ0fFtLMySdpLZ9h4CDhgmjS66FSZRGQueXCI2DhAmja64N+dezuM6vWBwcjHM90uavtzjyeHW+BrO5HoVxB+tLiOM1+w5MwsTHrHIXF8z/Asw5NzUXz+C4+fnDMGF6+KiD9SUOKXAiAMGEUa6/hdJI57B5DQKT+eprZukklA+ZCAAw0elz0/GUuBuXH4AJk9xo6LJUMk8Wu9pSmCD97NIyLaHSpdPaQpjI/olZOkk7Mgnj/cbF/mhyzxzM5fNL/ntxdTUEExbub1EaucWCaWAeJjitgKV2tdP8ijMLcz59ddGflhvPTmpzME68EpaGZm6XMwPj2CZ8jNcy8DHSnqF5DxMdCVMy50q62pVKcSG4uv0HBWtuwXkLc8azKFeLY1xc/cSrqqos6394iX8t4qPQLjrPJt/vcd7BnHHLPufyoGO/Kp0g2O02taxazb93uyBwysqP3YPEWUja72jewGQoFq60KMqghdi0CH11/2MXVIXQCoMj7Tcz9DRMFmO8QbpxtbFeIF6grF0Vu5gfS8bTq+ckTHiCfxVXInX2+1mUFme/d+pIHG4dedpAYcIrmIWLPHaWkdx5nBM808Pldco2UzAJOAfDRVxBUDqcKkbQJDCYkkG3YoLVHgZDaVT7God/1cRWehwGvsCo3A+AZrkZJ/Bz6Ewjj+OhwChMGENZRJ7sUCw1zS7JobZxx6e0UZgUGpBxluBIOiUMOm7cdCmMBw6Uhf+6PgJss/HByRJdLYM5gycyVRBQGhrrBB023B1ZbUZgbOjPxBnFLp1twI6m4iUwPjiK0RFiTn7WPjpAv1W9nnm8wDg59DeSJzJLTQOOnnj+Mj8PYUK490qH6GSNLAecyFYv8/MQBj5LUkf/naYAm4YPw5oBzBk8+usRYwRmU8IXhOFO7RkmvIBjZWXvjLBYAfx3lJfwDUwEdjKmfSMstXxwIoizaBpmg9iQ6dKMl22sEn5LYrBRe4KBuy0TR8cMy2bjHOHbTl1OwWyO8PMkVQSmYALwqtDMAZsJGHiAWYevF2Mwuysie6q9cZgQvLtsYEix/7MSBIzIw1GYBBwe1ZKeORgPk3o6JGMwIeoaiTIJg0nUCRWOwCSoswtRGYRBZWx18goTgjfijbhRGNThfG/U/MFUuIMYg25mocZMPWyrF5gY9bNw1+SYwV3+EvEQBhGVrQXmEaHdYVLcZZI1wDCRPsNk8Ph7RTD3M5sbTII8aVwFDGNJHyYE71lXBSNv1zc6mAjpZSuBEbcz9Q4mwd70WQfMPbXRwmxS7GH2OmCYSq0/mAixK1sVzM3PWpgKfXdhJTBMVXeYEHweszoYt73P3cAgMn9rg+nygQ0MIimzNhjmlh1M6P8DMLq5/cya1B/+bb7VwLTpwBomI1wBWw0M51kLExEuLq4GhumohcFlMlYHkzQw6Ii5+wyTMJT3C5vIuYZB5Kv/5F6xFzNeZaHys3fxYwOTET5BFrgLMxM0AcVJ3KyGgR9a/4nnlYGD5of2Ffio+6FDVMMQxr8qzDlZI2tX4Je8egZg25Rg2sSoYWrT+PhnkWkNQ4gyj6aOAO+ySryfiXjLQsKqa5u4zvAEE+GnVs5DFuLHvzAP4+D9hB1Clv07MBkjzMxrg4lYhZ+ZVwajK0ZYZtYGk7ALPppZGYx7Yej83+pgVMpwJ2ZrhBEFo/z1ymBiRtjNrAyG24wQdK8NJv+HYFiO/9M1whBw1gdD0Ae2AI5NyK6QLPOJzRklVUSaAD6wbU4ID8OOlHWmDiCor2c8y8IfrrJ2nSGEM42fmU01kbysjgBOlAosKjWcBKSUSlQFJWpu7s4Zu2/evq1FKhsgU8p+hrVvzpkyDZWFuT7DXGbu0+jUyIsN1p5ceER7jHA629FwE7e06+FyoNbp0SVz8NmZDsbI+zP7lPgYtQ5nSt6sk+ubGDUGCoYcMkpGs5Ow6Sj7ykD52kPIQmodJu7Sw02roNcb4yxkyDvAPWlyhGadKSv/TSomns+0EkcqDOVY5k9uSjs5u+lA9DMrIHsHu52cETLnN8mUZhrLI+1DbmrPNDN6UTmXdLRJOsn8E1dZew+AbGPlU0xjUc6Y/yTaewC0GxqtuE3YCVg78hTUSKYh9e7MXYTZ2Yxh2jfpiLeabhIx3jSBEcPcbzVluLdN+uIE01T0r2+foLtvtqEPGiZOZ6RpAlR9qxfJorsJGJoYNAK547Q8M7Ug73c0t5GBz1O47KblmKk3yt3odhU4sA1YWl4w2+e9oSKdKs7uN87h5b9exQUiV7v36BvMVl2ZsO5dAFRFu+HnxeBkgOUYKv7OH+8CUO7P9wSu2WDtwAWuJnSrptHChGbWLQV0NAtesWPqm7s69Yz0/tzgI2EhmpnIv1X/zSZDfsZcSG0gqzTzpexRs+X2aiMp4/zQAWIYeB2wKan06T1Nz0iAxA6AXVoNY6qnEPOMvEE70G9ghm/Qbq//Z5h7AfQ7zNmIn/0EhrPzAGZLeCPooZ/AiNN2CBOZWMB+AcNl+QKzpSdpfgMjjttXmMpAAPsLmEM1ArM1MAX8AIb3CbYmTfMDmJ5hnmo10RfO78NM1WqqTUP99K/D8L5hnmDgxYCH0iAYA4Z5Lj/5VHkuIu5iRQ7ZApBuMHXqrTEvMNQdpyxA+xn62Z/73AntuVqjg6o+9ScNep/uTD4vE4OKrYM6mj4lTyNy2Lb5Qj3nlv67OprIzgY3aViK1sKUZ+xLxoPuDcPas4Qkg4YmzvY+aYj+bTAnYbboIwFpwytqxpTkrCyGz/4CkyHnANeGXwiyNjbhVaQ8mIXZepg5QLgnzNmZZaUaeWOOq9e+DSM1zuEFaIWwq/nOJqM0+8rG9emTp9cnH4EJGWxGE+Lo76BdNB44uyRG9IEVbFn1+W0JiWqEsq+YJho94wTJiUGLguuxdhqjHRuW125p2hJHOA/rqcFRoKGqL2PPPd5LY2EDPS5ZWpq4dN5aRy7HmWiuN97lJFu0GVCyKE1d0rYsx6uts4xlqnHTRP+ZaL6NCtdxZfS++eZcxXIJjsgn2p1NdQaaPRnUrheQB8tQQWXPVzjhspp46MkGVO/7HEl92Zl9Q6OVZVkVn8NxJ3ttT3fTmj6CbppmBYbfnHnw7L33TeGn+0+96XMWTlxp44KdIvQauUD7TWLzqWWUyzddQt90oBtvCqPYCRm6AHCmo4I3Xc7e9wYcaROgeOztPuVhD3VRwcgc5A73Y4th6uXmORQQMk5IoQuEJ6jXneHgcd91Bpzrp5n1d09c2r7zaQ/r0Vhn7ySfcOY6t850Os0eHWhlfok+MBvP4fSiAn2a6UI714M2Kzoa4aaR2VpGi3DqZTS+L3h6tj/wbHfgTUuj8+jbIHecXcXa31MXs72O5/s2h1fNdfrJhWWOx0oPfJi8RMLU2xthtvIXWPuKydENDAJmazI4xtE4U10n4TDb3xqmoVn0mMtg6tjmlyjWwodcCvNL4ywzCwRmG/6KZX4Wg8P8yNWWuhgU5heuttjFwDB1PPBlwZ4OCPNd44DMgoD54siBjBYszDb8Co61fBKjwHwDx4J6GB6mHjqfxUFYhQDz0TU0RLLgYT6GgyWhwXxi7GCGvSEY0zg0FDLM1uAyiprAnvQfY/vQc7CsWJ4AAAAASUVORK5CYII="
              alt="Amanda King"
            />
          </div>
          <figcaption>{user.name}</figcaption>
        </figure>
        <nav>
          <section className="dicover">
            <ul>
              <li>
                <Link to={"/profile"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.855 14.365l-1.817 6.36a1.001 1.001 0 0 0 1.517 1.106L12 18.202l5.445 3.63a1 1 0 0 0 1.517-1.106l-1.817-6.36 4.48-3.584a1.001 1.001 0 0 0-.461-1.767l-5.497-.916-2.772-5.545c-.34-.678-1.449-.678-1.789 0L8.333 8.098l-5.497.916a1 1 0 0 0-.461 1.767l4.48 3.584zm2.309-4.379c.315-.053.587-.253.73-.539L12 5.236l2.105 4.211c.144.286.415.486.73.539l3.79.632-3.251 2.601a1.003 1.003 0 0 0-.337 1.056l1.253 4.385-3.736-2.491a1 1 0 0 0-1.109-.001l-3.736 2.491 1.253-4.385a1.002 1.002 0 0 0-.337-1.056l-3.251-2.601 3.79-.631z" />
                  </svg>
                  Profile
                </Link>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.353 2.355-6.049-.002-8.416zm-1.412 7.002L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002 1.563 1.571 1.564 4.025.002 5.588z" />
                  </svg>
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.707 2.293A.996.996 0 0 0 12 2H3a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l9 9a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9zM12 19.586l-8-8V4h7.586l8 8L12 19.586z" />
                    <circle cx="7.507" cy="7.505" r="1.505" />
                  </svg>
                  Track application
                </a>
              </li>
            </ul>
          </section>

          <section className="dicover">
            <ul>
              <li>
                <FilterComponent
                  filters={filters}
                  handleChange={handleChange}
                />
              </li>
            </ul>
          </section>
        </nav>
      </header>
      <main className="content-wrap">
        {/* <header className="content-head">
                    <h1>Hello {user.name} !</h1>
                    <div className="action">
                        <button>Save search</button>
                    </div>
                </header> */}
        <Card
          user={user}
          Country={Country}
          Degree={Degree}
          setuser={setUser}
          filters={filters}
        />
      </main>
    </div>
  );
}
export default User;
