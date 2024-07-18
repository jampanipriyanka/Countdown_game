import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal =  forwardRef(function ResultModal( {targetTime, remainingTime, onReset}, ref){
    const dialog  = useRef();


    const userLost = remainingTime <= 0;
    const formatedTime = (remainingTime/ 1000).toFixed(2);
    const score = Math.round((1- remainingTime / (targetTime*1000)) * 100);
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });

    return <dialog ref={dialog} className="result-modal">
        {userLost && <h2>you Lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>
            target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
            you stopped the timer with <strong> {formatedTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onreset}>
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal;