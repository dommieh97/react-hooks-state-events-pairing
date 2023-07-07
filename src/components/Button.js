 import React, {useState} from "react";

 function Button(props) {

const [upCount,setUpCount] = useState(props.up)
const [downCount,setDownCount] = useState(props.down)

const handleUpClick = ()=>
{
    console.log("click")
    setUpCount((upCount) => upCount + 1)
}

const handleDownClick = ()=>
{
    console.log("click")
    setDownCount((downCount) => downCount + 1)
}

    return (
       
        <div>
        <button type="button" onClick={handleUpClick}>{upCount}👍</button>
        <button type="button" onClick={handleDownClick}>{downCount}👎</button>
      </div>
       );
   }
  
   export default Button;