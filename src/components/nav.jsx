import React from "react"

const navbar = () => {
    return (
        <nav class="nav">
            <div class="navbox">
                <ul class="navlist nobullets">
                    <li class="navitem">
                        <a class="navlink" href="#aboutme">About me</a>
                    </li>
                    <li class="navitem">
                        <a class="navlink" href="#skillset">Skill set</a>
                    </li>
                    <li class="navitem">
                        <a class="navlink" href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar