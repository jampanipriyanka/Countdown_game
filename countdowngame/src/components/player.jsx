import { useState, useRef } from "react";

export default function Player(){
    const PlayerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState(null);
   
    function handlleClick(){
        setEnteredPlayerName(PlayerName.current.value)
        PlayerName.current.value = '';
    }
    return(
        <section id="player">
            <h2>Welcome {enteredPlayerName ? enteredPlayerName: 'unknown Entity'}</h2>
            <p>
                <input ref={PlayerName} type="text" />
                <button onClick={handlleClick}> set Name</button>
            </p>
        </section>
    )
}