import React, {useState} from "react";

function Button({upVote, downVote}){
const [likes,setLikes] = useState(upVote)
const [dislikes, setDislikes] = useState(downVote)

function handleLikes(){
    setLikes(likes => likes+1)
}
function handleDislikes(){
    setDislikes(dislikes => dislikes-1)
}
    return(
        <>
        <button onClick={handleLikes}>{likes}👍 </button>
        <button onClick={handleDislikes}>{dislikes}👎</button>
        </>
    )
}

export default Button