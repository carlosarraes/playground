import React from "react"
import boxes from "./component/boxes"
import Box from "./component/Box"

export default function App() {
    const [squares,setSquares] = React.useState(boxes)

    const toggle = id => {
        setSquares(prevState =>{
            return prevState.map(square => (square.id === id ? {...square, on: !square.on} : square))
        })
    }

    const squareElements = squares.map(square => (<Box key={square.id} toggle={() => toggle(square.id)} on={square.on}/>))

    return (
        <main>
            {squareElements}
        </main>
    )
}