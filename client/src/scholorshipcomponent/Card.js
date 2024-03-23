import React from "react";

function Card(props) {
  const [sch, setsch] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://scholarship-find.onrender.com/api/scholorship/fetchscholorship`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const json = await response.json();
        setsch(json);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  

  const cardss = sch.scholorship ? sch.scholorship.map((element) => {
    function transfer(e) {
      // Handle transfer
    }
    if ((element.degrees === props.Degree && element.location === props.Country)||(element.degrees === props.Degree)||(element.location === props.Country)) {
      return (
        <div className="ag-format-container" key={element.id}>
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title" onClick={transfer}>{element.title}</div>

                <div className="ag-courses-item_date-box">
                  Deadline:
                  <span className="ag-courses-item_date">{element.date}</span>
                  <br></br>
                  <br></br>
                  Funds:
                  <span className="ag-courses-item_date">{element.funds}</span>
                  <br></br>
                  <br></br>
                  <i className="fa-solid fa-location-dot"> {element.location}</i>
                  <br />
                  <br />
                  <button style={{ 'padding': '12px' }}>Apply Now</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }) : null;

  return <div className="card-container">{cardss}</div>;
}

export default Card;
