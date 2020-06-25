import React from "react";

function Navbar() {
    return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">User's Home</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Navigation
            </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Characters</a>
                            <a class="dropdown-item" href="#">Trophies</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </ul>
                <a class="nav-link disabled" href="#">Log Out</a>
            </div>
        </nav>
    </div>
    )

}
export default Navbar;