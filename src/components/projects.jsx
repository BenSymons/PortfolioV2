import React from "react"

const projects = () => {
    return (<div id="projectbox">
        <section id="projects">
            <h1>Projects</h1>
            <div class="projectslot">
                <div class="projectcaption">
                    <h2>Mates Rates</h2>
                    <p>This is a mobile app used to rate and review restaurants that also has some social networking aspects.
                    It uses React Native for the front end, and MongoDB and GraphQL for the back end. The whole project was
                    built from scratch for my final project at Northcoders which I completed with the rest of my group.
                    <br />
                        <br />
                    Using the app, you can browse through all the restaurants or filter based on cuisine or locations. If you
                    click on search, you can search for restaurants as well. Once viewing a restaurant, you can rate it, leave
                    a review and add it to your wishlist. You can also add or remove friends on your profile as well as search
                    for friends to add. When you search for friends, the button to add or remove a friend will render depending
                    on whether they are already in your friends list.
                    <br />
                        <br />
                        <a href="https://github.com/BenSymons/MatesRates" target="blank" class="repolink">Link</a> to the repository on github
                    </p>
                </div>
                <img class="projectimg" src="./images/Mates rates pic.png" alt="a restaurant rating phone app"></img>
            </div>
            <div class="projectslot">
                <div class="projectcaption">
                    <h2>NC news</h2>
                    <p>This is a full stack news/forum application that I made. It uses SQL (postgres) and a Restful API in the backend
                    to store and manage the data. For the frontend, I used react and CSS.
                    <br />
                        <br />
                    When using the app you can look at a list of articles or topics. When viewing the articles, you can sort based on
                    the newest, the most comments or the most votes. When viewing an article you can view the number of comments, the votes
                    and a list of all the comments. There is also a form where you can add your own comment and you can delete comments.
                    <br />
                        <br />
                    Using CSS, the buttons for the application have a hover effect to change colour gradually. Also, upon rendering,
                    the list of articles and comments move in from the bottom as an animation.
                    <br />
                        <br />
                        <a href="https://github.com/BenSymons/Nc-News" target="blank" class="repolink">Link</a> to the repository on github.
                    </p>
                </div>
                <img class="projectimg" src="./images/NCnewspic.png" alt="a news website"></img>
            </div>
            <div class="projectslot">
                <div class="projectcaption">
                    <h2>Rick and Morty fan site</h2>
                    <p>This is a simple fan site for the program Rick and Morty. It uses a third party API with a GraphQL endpoint
                    and React with CSS for the front end. On the app, there are different pages which lists characters, locations and
                    episodes. For each section, I make use of the fact that the data is paginated and allow users to navigate by page. You
                    can also search for an episode, character or location.
                    <br />
                        <br />
                    The search functionality and the pagination both make use of GraphQL variables which are passed into the queries.
                    <br />
                        <br />
                        <a href="https://github.com/BenSymons/Rick-and-Morty" target="blank" class="repolink">Link</a> to the repository on github.
                    </p>
                </div>
                <img class="projectimg" src="./images/Rick&Mortypic.png" alt="a Rick and Morty fan website"></img>
            </div>
            <div class="projectslot">
                <div class="projectcaption">
                    <h2>Antique shop back end</h2>
                    <p>This is the backend for a database for a fictitious antiques shop. It uses an SQL (postgres) database and an MVC
                    structured backend using Knex as a framework to help query the database.
                    <br />
                        <br />
                    The models for this backend allows GET, POST and PATCH requests that query the SQL database. There is also
                    error handling functions that appropriately account for user errors. To help modify the data, there are
                    util functions which modify the data to allow it to interact with our database.
                    <br />
                        <br />
                        <a href="https://github.com/BenSymons/be-mitchs-rare-treasures" target="blank" class="repolink">Link</a> to the repository on github.
                    </p>
                </div>
                <img class="projectimg" src="./images/Treasurespic.png" alt="some computer code"></img>
            </div>
        </section>
    </div>
    )
}

export default projects;