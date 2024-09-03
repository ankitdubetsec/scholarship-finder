import React from "react";
import axios from "axios";

function Card(props) {
  const [sch, setsch] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [appliedScholarships, setAppliedScholarships] = React.useState({});

  React.useEffect(() => {
    const fetchFilteredScholarships = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/scholorship/filter",
          { params: props.filters }
        );
        setsch(response.data);
        setLoading(false);
        console.log(response.data);

        const appliedResponse = await axios.get(
          `http://localhost:5000/api/admin/admingetdata/${props.userr._id}`,
          {
            headers: {
              "auth-token": localStorage.getItem("admintoken"),
              "Content-Type": "application/json",
            },
          }
        );
        const appliedData = appliedResponse.data.note.reduce((acc, curr) => {
          acc[curr.schname] = curr.status;
          return acc;
        }, {});
        setAppliedScholarships(appliedData);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchFilteredScholarships();
  }, [props.filters]);

  const handleSubmit = async (title, provId, id) => {
    console.log("prop:", props);
    try {
      await axios.post("http://localhost:5000/api/admin/admindata", {
        schname: title,
        student: props.user._id,
        name: props.user.name,
        mobile: props.user.mobile,
        date_of_birth: props.user.date_of_birth,
        address: props.user.address,
        country: props.user.country,
        gender: props.user.gender,
        college_name: props.user.college_name,
        uid: props.user.uid,
        cgpa: props.user.cgpa,
        degree: props.user.degree,
        status: "Applied",
        provider: provId ? provId : null,
      });
      console.log("Posted successfully");

      // Update the appliedScholarships state
      setAppliedScholarships((prev) => ({
        ...prev,
        [title]: "Applied",
      }));
    } catch (error) {
      console.log(error.message);
    }
  };
  const cardss =
    sch.length > 0
      ? sch.map((element) => {
          return (
            <div className="ag-format-container" key={element.id}>
              <div className="ag-courses_box">
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">{element.title}</div>

                    <div className="ag-courses-item_date-box">
                      Deadline:
                      <span className="ag-courses-item_date">
                        {element.date}
                      </span>
                      <br></br>
                      <br></br>
                      Funds:
                      <span className="ag-courses-item_date">
                        {element.funds}
                      </span>
                      <br></br>
                      <br></br>
                      <i className="fa-solid fa-location-dot">
                        {" "}
                        {element.location}
                      </i>
                      <br />
                      <br />
                      <button
                        onClick={() =>
                          handleSubmit(
                            element.title,
                            element.provider,
                            element._id
                          )
                        }
                        style={{ position: "relative", left: "240px" }}
                      >
                        {appliedScholarships[element.title] === "Applied"
                          ? "Applied"
                          : appliedScholarships[element.title] === "Accepted"
                          ? "Accepted"
                          : "Apply Now"}
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })
      : null;
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" style={{}}></div>
      </div>
    );
  }
  return (
    <div className="card-container" style={{ flexDirection: "row" }}>
      {cardss}
    </div>
  );
}

export default Card;
