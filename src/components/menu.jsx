import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-scroll";

const burger = () => {
    return (
        <div>
            <Menu width={120}>
                <a className="menu-item" href="#top">Home</a>
                <a className="menu-item" href="#aboutme">About me</a>
                <a className="menu-item" href="#skillset">SKill set</a>
                <a className="menu-item" href="#projects">Projects</a>
                <a className="menu-item" href="#contactbox">Contact me</a>
            </Menu>
        </div>
    )
}

export default burger;