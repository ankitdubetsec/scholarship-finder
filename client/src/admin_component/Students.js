import React from 'react'
import { Link } from "react-router-dom";
import Profile from "../Pages/Profile";
import axios from 'axios';

export default function Students(props)  {
    // console.log(props.userdata.name)
    const dataToPass = { name: 'John Doe', age: 25 };
    let [val,setval]=React.useState("");
    //profprop={profprop}
    //setprofprop={setprofprop}
    // function handlestatus(id,name){
    //     console.log(id)
    //     console.log(name)

    // }
    const handlestatus=async(id,stat)=>{
        // const title2=prompt("enter new title")
        // const content2=prompt("enter new content")
        // const completed2=prompt("completed?")
        
       let x;
       if(stat=="Applied"){
        x="Accepted"
       }
       else if(stat=="Accepted"){
        x="Applied"
       }
        try {
          const response=await axios.patch(`https://scholarship-find.onrender.com/api/admin/admindata/${id}`,{status:x});
          const updatedNote = response.data;
            
            // Update the state of notes by mapping over the existing array
            // If the task ID matches the updated note, replace it with the updated note
            // Otherwise, keep the task as it is
            //setNotes(notes.map(task => task._id === props.id ? updatedNote : data));
          //setNotes();
        } catch (error) {
          console.error('Error deleting task:', error);
        }
        console.log("update function")
      }
   
    function handleprofile(){
        setval(prev=>!prev)
    }
    console.log("student")
    console.log(props.userr)
  return (
  
    <div>
      <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Profile</th>
                <th>Course</th>
                <th>Scholarship Name</th>
                <th>GPA</th>
                <th>Contact</th>
                <th>Action</th>
                <th>status</th>
            </tr>
        </thead>
        
            {props.userr.map((dat)=>{
                // props.setprofprop(dat.schname);
               // setval(dat.status)
                return(
                    <tbody>
                        <tr>
                        <td>{dat.name}</td>
                        <td>
                       {/* <Link to={'/profile'} ><button>profile</button></Link> */}
                       {/* <a href='./profile'>faf</a> */}
                       <a href={`/profile?name=${dat.student}`}><button>profile</button></a>
                            </td>
                        <td>{dat.degree}</td>
                        
                        <td>{dat.schname}</td>
                        <td>{dat.cgpa}</td>
                        <td>{dat.mobile}</td>
                        <td><button onClick={()=>handlestatus(dat._id,dat.status)}>{dat.status === "Accepted" ? "Accepted" : "Accept"}</button></td>
                        </tr>
                
                
                </tbody>
            
            )})}

            
          
        
    </table>
    {/* {val&&<Profile data={val}/>} */}
    </div>
  )
}
