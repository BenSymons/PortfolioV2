import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Burger = () => {
    const [hidden, setHidden] = useState("hidden")

    const handleClick = () => {
        hidden === "hidden" ? setHidden("menu") : setHidden("hidden")
        console.log(hidden)
    }

    return (<div className="burgerBox">
        <div className="burgerMenu">
            <button onClick={() => handleClick()}><AiOutlineMenu /></button>
        </div>
        <div className={hidden}>
            <ul>
                <li><a href="#top">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skillset">Skill set</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactbox">Contact me</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Burger;