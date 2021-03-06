import React from "react"

const contactme = () => {
    return (
        <div id="contactbox">
            <section>
                <h1>Contact me</h1>
                <div className="contactdetails">
                    <p>Phone number: 07719 870 628</p>
                    <p>Email: <a className="repolink" href="mailto:bsymonsb@hotmail.co.uk">bsymonsb@hotmail.co.uk</a></p>
                    <p>find me on <a className="repolink" href="https://www.linkedin.com/in/ben-symons-77a548101/"
                        target="blank">Linked In</a></p>
                    <p>find me on <a className="repolink" href="https://github.com/BenSymons">Github</a></p>
                </div>
            </section>
        </div>
    )
}

export default contactme;