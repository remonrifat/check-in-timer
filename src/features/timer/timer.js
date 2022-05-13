// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import { ButtonGroup, Typography } from '@mui/material';

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
//     const [isActive, setIsActive] = useState(false);

//     function toggle() {
//         setIsActive(!isActive);
//     }

//     function reset() {
//         setSeconds(0);
//         setIsActive(false);
//     }

//     useEffect(() => {
//         let interval = null;
//         if (isActive) {
//             interval = setInterval(() => {
//                 setSeconds(seconds => seconds + 1);
//             }, 1000);
//         } else if (!isActive && seconds !== 0) {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isActive, seconds]);

//     return (
//         <div className="app">
//             <Typography variant="h3" >
//                 <div className="time" align="center" style={{ color: "white" }}>
//                     {seconds}S
//                 </div>
//             </Typography>

//             <div className="">

//                 <Button variant="contained" sx={{ mx: "auto", width: 500, p: 3, m: 5 }} className={`${isActive ? 'active' : 'inactive'}`} onClick={toggle} >
//                     {isActive ? 'Check Out' : 'Check In'}</Button>

//                 <Button variant="contained" sx={{ mx: "auto", width: 500, p: 3, m: 5 }} className="button" onClick={reset}>
//                     Reset
//                 </Button>



//             </div>
//         </div>
//     );
// };

// export default Timer;



import { Button, buttonClasses } from "@mui/material";
import React from "react";
import './timer.css'

const Timer = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    return (
        <div className="Timers">
            <h2 className="time" align="center" style={{ color: "white" }}>Check In Timer</h2>
            <div id="display">
                <span className="time" align="center" style={{ color: "white" }}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span className="time" align="center" style={{ color: "white" }}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span className="time" align="center" style={{ color: "white" }}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div id="buttons">
                {!timerOn && time === 0 && (
                    <Button className="time" variant="contained" align="center" style={{ color: "white" }} onClick={() => setTimerOn(true)}>Check In</Button>

                )}
                {timerOn && <Button className="time" variant="contained" align="center" style={{ color: "white" }} onClick={() => setTimerOn(false)}>Check Out</Button>}
                {!timerOn && time > 0 && (
                    <Button variant="contained" onClick={() => setTime(0)}>Reset</Button>
                )}
                {!timerOn && time > 0 && (
                    <Button className="time" variant="contained" align="center" style={{ color: "white" }} onClick={() => setTimerOn(true)}>Resume</Button>
                )}
            </div>
        </div>
    );
};

export default Timer;