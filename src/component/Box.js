import React from "react";

export default function Box(props){

    const styles ={
        backgroundColor: props.on ? "#222" : "transparent",
    }

    return(
        <div style={styles} className="square" onClick={props.toggle}></div>
    )
}