import React from "react"

const skillset = () => {
    return (
        <div id="skillset" className="skillsetbox">
            <section>
                <h1>Skill set</h1>
                <p>Here's a list of the experience I have with programming languages and technologies</p>
                <div className="skillsbox">
                    <div className="skills">
                        <h3>Programming</h3>
                        <ul>
                            <li className="skill">NodeJS</li>
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">SQL</li>
                            <li className="skill">React</li>
                            <li className="skill">GraphQL</li>
                            <li className="skill">Restful APIs</li>
                            <li className="skill">Git</li>
                            <li className="skill">Jest (a testing library)</li>
                            <li className="skill">Python</li>
                            <li className="skill">React native</li>
                            <li className="skill">PHP</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h3>Other skills</h3>
                        <ul>
                            <li className="skill">Microsoft Excel</li>
                            <li className="skill">Microsoft Word</li>
                            <li className="skill">Microsoft Powerpoint</li>
                            <li className="skill">Basic 3D modelling using Blender</li>
                            <li className="skill">Video editing using Blender</li>
                            <li className="skill">Image editing using Gimp</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default skillset