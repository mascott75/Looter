import React from "react";
import start from "../imgs/start.png"
import './style.css'
function playButton()
{
    return(
        <div id="playButton">
            <img id="startImage" src={start} ></img>
        </div>
    )

}

export default playButton