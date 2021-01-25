import React from "react"

const projects = () => {
    return (<div id="projectbox">
        <section id="projects">
            <h1>Projects</h1>
            <div class="projectslot">
                <h2>Mates Rates</h2>
                <p>This is a mobile app used to rate and review restaurants that also has some social networking aspects.
                It uses React Native for the front end, and MongoDB and GraphQL for the back end. The whole project was
                built from scratch for my final project at Northcoders which I completed with the rest of my group.
                </p>
                <img src="./images/Mates rates pic.png"></img>
            </div>
            <div class="projectslot">
                <h2>NC news</h2>
                <p>This is a full stack news/forum application that I made. It uses SQL (postgres) and a Restful API in the backend
                to store and manage the data. For the frontend, I used react and CSS.
                </p>
                <img src="./images/NCnewspic.png"></img>
            </div>
            <div class="projectslot">
                <h2>Rick and Morty fan site</h2>
                <p>This is a simple fan site for the program Rick and Morty. It uses a third party API with a GraphQL endpoint
                and React with CSS for the front end. Features include: Different pages which lists characters, locations and episodes,
                a paginated list of all the items in the response, a functioning search bar for each section and a persistent
                navbar at the top of the page.
                </p>
                <img src="./images/Rick&Mortypic.png"></img>
            </div>
        </section>
    </div>
    )
}

export default projects;