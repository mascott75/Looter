import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/index"
import Border from "../components/border/index"
import API from "../utils/API"
import { useHistory } from "react-router-dom";
import PlayButton from "../components/play_button/index"



function Home() {
    const [user, setUser] = useState({})
    const history = useHistory();
    
    useEffect(() => {
        API.checkUserLogged()
            .then((user) => {
                if (user.data.id)
                    setUser(user.data);
                else    
                    history.push("/")
        })
    })

    return (
        <div>
            <Navbar />
            
            <Border>

            </Border>
        </div>
    )
}

export default Home;