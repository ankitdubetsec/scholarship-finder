// import './App.css';
import "./style.css";
import User from "./User";
import Card from "./Card";
import React from "react";
function Userapp() {
  const [sch, setsch] = React.useState({});

  // React.useEffect(async()=>{
  // console.log("effect rendered")

  // console.log("effect rendered")

  // fetch(`https://api.imgflip.com/get_memes`)
  // .then(res =>res.json())
  // .then(data=>setImage(data))

  // const getUser = async () => {
  // }

  React.useEffect(
    () => async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/scholorship/fetchscholorship`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setsch(json);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  return (
    <div>
      <User />
    </div>
  );
}

export default Userapp;
