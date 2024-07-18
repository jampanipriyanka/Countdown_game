import { useRef, useState } from "react";
import ResultModal from "./Result Modal";

export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const dialog= useRef();
   
    const [timeRemains, settimereamains]= useState(targetTime * 1000)
   const timerIsActive = timeRemains > 0 && timeRemains < targetTime * 1000;
  
   if(timeRemains <=0){
    clearInterval(timer.current);
    dialog.current.open();
   }

   function handlereset(){
    settimereamains(targetTime * 1000);
   }

   function handleStart(){
    timer.current = setInterval(()=>{
        settimereamains(prevTimeReamins => prevTimeReamins - 10);
    }, 10);
   }

   function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);
   }
   return <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemains} onReset={handlereset} />
        <section className= "challenge">
            <h2>{title}</h2>
            <p className="challenge-time"> 
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive? handleStop : handleStart}>
                    {timerIsActive ? 'Stop': 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive? 'active' : undefined}>
                {timerIsActive ? 'Time is running...': 'Timer Inactivate'}
            </p>

        </section>
    </>
}