import React from "react";
import './style.css'

function Border() {
    return (
        <div id="border">
            <div class="container">
                <div class="row tower">
                    <div class="col-sm-4 towers" id="tower1">
                        <img class="tower-icon" src="https://via.placeholder.com/150"></img>
                    </div>
                    <div class="col-sm-4 towers" id="tower1">
                        <img class="tower-icon" src="https://via.placeholder.com/150"></img>
                    </div>
                    <div class="col-sm-4 towers">
                        <img class="tower-icon" src="https://via.placeholder.com/150"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Border