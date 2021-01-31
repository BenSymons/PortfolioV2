import React from "react"

const aboutme = () => {
    return (
        <div id="aboutme" class="aboutmebox">
            <section>
                <h1>About me</h1>
                <div class="aboutmecontent">
                    <p>I'm a former teacher who tried his hand at coding and ended up really enjoying it.
                    When I taught, I used to handle assessment data; grades, tests scores, things like that.
                    To do this, I mainly used Excel and I was amazed at how much you can do with formulae and functions.
                    I ended up automating all sorts of things which saved me time and was very satisfying to do.
                    This lead me to look into code and I eventually enrolled at Northcoders where I learned everything
                    I needed to become a developer. It was tough, but really enjoyable. Now I'm looking to start
                    my new career as a web developer or a software developer and I can't wait to get started.
                    <br />
                        <br />
                    Despite being relatively inexperienced, I have already learned many valuable programming skills.
                    I've learned NodeJS thoroughly and can build basic servers using both promises and callback functions.
                    I know SQL and can use SQL to create back end applications and APIs as well as being able to use
                    third party APIs. I have also made front end and full stack applications using React, GraphQL and
                    CSS. Have a look at the projects section of this website to see examples of some of my work.
                    <br />
                        <br />
                    In my spare time I like gaming. I play mostly minecraft but I also like speedrunning. Speedrunning is
                    where you compete to complete a game as fast as possible. It takes a lot of skill and practice and it's
                    lots of fun! I'm also a big fan of science and I enjoy watching science documentaries and videos on youtube.
                    I also make my own youtube videos as well. Most of these are tutorials for minecraft. Here's a link to my
                    <a href="https://www.youtube.com/channel/UCRuWvCWVhUv-HxAGo2RgY2Q" class="repolink" target="blank"> Youtube </a>
                    channel if you want to check it out. I record and edit all the videos myself.</p>
                    <div class="gallery">
                        <img src="./images/Me and Woody.jpg" class="photo" alt="Me with my Nephew"></img>
                        <img src="./images/me at BeastV.jpg" class="photo" alt="Me smiling"></img>
                    </div>
                </div>
            </section>
        </div>)
}

export default aboutme