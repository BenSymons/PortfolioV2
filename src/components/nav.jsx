import React from "react"

const navbar = () => {
    return (
        <nav class="nav">
            <div class="navbox">
                <ul class="navlist nobullets">
                    <li class="navitem">
                        <a href="#aboutme">About me</a>
                    </li>
                    <li class="navitem">
                        <a href="#skillset">Skill set</a>
                    </li>
                    <li class="navitem">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar