import React, {useState} from "react";

function Comments({comments}){

const [visualState, setVisualState] = useState(true)

const hideOrShow = visualState ? "Hide Comments" : "Show Comments" 

function handleHide(){
    setVisualState(visualState => !visualState)
}

const userComments = comments.map(comment => {
    if(visualState === true){
        return(
            <div key={comment.user}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            </div>
        )
    }else{
        return null
    }
})
    return(
    <>
    <button onClick={handleHide}>{hideOrShow}</button>
    <br></br>
    _______________________________________________________________________
    {visualState ? <h2>2 Comments</h2> : null}
    {userComments}
    </>
    )}

export default Comments