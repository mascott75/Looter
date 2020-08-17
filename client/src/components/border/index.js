import React from "react";
import './style.css'
import PlayButton from "../play_button"

function Border() {
    return (
        <div id="border">
            <div class="container">
                <div class="row tower">
                    <div class="col-sm-3 towers" id="tower1">
                        <img class="tower-icon" src=""></img>
                    </div>
                    <div class="col-sm-6 towers" id="tower2">
                       <div id="tower-icon"> <PlayButton></PlayButton></div>
                    </div>
                    <div class="col-sm-3 towers" id="tower3">
                        <img class="tower-icon" src=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Border