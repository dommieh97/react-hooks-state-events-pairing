import React,{useState} from "react";

function Comments({comm}) {

const [haveComments,hideComments]=useState(true)

const handleCommBtn= ()=>
{
 return   hideComments((haveComments) => !haveComments)
}

 const commentList= comm.map ((comm)=>
{
 return(<p key={comm.id}><strong>{comm.user}</strong> <p key="apple">{comm.comment} <button type="button" >0👍</button>
 <button type="button" >24872348238👎</button><button>delete comment</button></p></p>)
})
    console.log(comm)
    return(
    <div>
    <button type="button" onClick={handleCommBtn}>Hide Comments</button>
    <br></br>
    <input type="text" placeholder="Find A User"></input>
    {haveComments ? commentList : null}
  </div>
    )
  }
 
  export default Comments;

  