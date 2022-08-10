import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    const toggle = () =>{
        setIsShown(prevState => {
            return !prevState;
        })
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {isShown ? <button onClick={toggle}>Hide</button> : <button onClick={toggle}>Show</button>}
            <hr />
        </div>
    )
}