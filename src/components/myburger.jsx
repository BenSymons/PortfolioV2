import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Burger = () => {
    const [hidden, setHidden] = useState("hidden")

    const handleClick = () => {
        hidden === "hidden" ? setHidden("menu") : setHidden("hidden")
    }

    return (<div className="burgerBox">
        <div className="burgerMenu">
            <button onClick={() => handleClick()}><AiOutlineMenu /></button>
        </div>
        <div className={hidden}>
            <ul className="nobullets">
                <li>
                    <div className="burgerItem">
                        <a className="burgerLink" href="#top">Home</a>
                    </div>
                </li>
                <li>
                    <div className="burgerItem">
                        <a className="burgerLink" href="#aboutme">About me</a>
                    </div>
                </li>
                <li>
                    <div className="burgerItem">
                        <a className="burgerLink" href="#skillset">Skill set</a>
                    </div>
                </li>
                <li>
                    <div className="burgerItem">
                        <a className="burgerLink" href="#projects">Projects</a>
                    </div>
                </li>
                <li>
                    <div className="burgerItem">
                        <a className="burgerLink" href="#contactbox">Contact me</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Burger;