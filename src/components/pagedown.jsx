import React from "react"

const pagedown = () => {
    const scrolldown = () => {
        window.scrollTo({ top: 100, behaviour: "smooth" })
    }
    return (<button onClick={scrolldown}>Down</button>)
}

export default pagedown