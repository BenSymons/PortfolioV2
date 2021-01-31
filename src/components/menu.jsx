import React from "react";
import { slide as Menu } from "react-burger-menu";

const burger = () => {
    return (
        <Menu>
            <a class="menu-item" href="#top">Home</a>
            <a class="menu-item" href="#aboutme">About me</a>
            <a class="menu-item" href="#skillset">SKill set</a>
            <a class="menu-item" href="#projects">Projects</a>
            <a class="menu-item" href="#contactbox">Contact me</a>
        </Menu>
    )
}

export default burger;