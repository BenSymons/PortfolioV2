import React from "react"

const navbar = () => {
    return (
        <nav className="nav">
            <div className="navbox">
                <ul className="navlist nobullets">
                    <li className="navitem">
                        <a className="navlink" href="#top">Home</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="#aboutme">About me</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="#skillset">Skill set</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="#projects">Projects</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="#contactbox">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar