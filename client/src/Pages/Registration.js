
import {useState , React ,useRef}from 'react'
import '../styles/Registration.css'
function Registration() {

    const inputRef = useRef(null);

  const handleClick = () =>{
    inputRef.current.focus();
  }
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className='container'>
         <h1>Application  Form</h1>
       <div className='contents'>
       <h1>Personal Details</h1>
       <div className='details'>
       <h3>Name:</h3>
        <input 
        type='text' 
        placeholder='Name'
        className={isFocused ? 'input-with-shadow' : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}></input>
        </div>
        <h3>Password</h3>
        <input type='password' placeholder='Password'  ref={inputRef}  ></input>
        <button onClick={handleClick}>Submit</button>
       </div>
    </div>
  )
}

export default Registration
