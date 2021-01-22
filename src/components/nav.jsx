import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";

const navbar = () => {
    return (
        <nav class="nav">
            <div class="navbox">
                <ul class="navlist nobullets">
                    <li class="navitem">
                        <Link
                            activeClass="active"
                            to="aboutme"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About me
                        </Link>
                    </li>
                    <li class="navitem">Skill set</li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar