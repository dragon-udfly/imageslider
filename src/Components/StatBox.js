import react, { useState, useEffect } from "react";
import '../CSS/StatsBoxes.css'

//2 components here - increasing the number
function useCountUp(target, duration) {

    const [count, setCount] = useState(0);

    //update the next count value
    //arrow function - update what is next 
    useEffect(() => {
        let start = 0;
        const stepTime = 20; //interval time that take 0 to 1 -  20ms
        const steps = duration / stepTime;
        const increment = target / steps; // from increment how much u need to one to another

        const timer = setInterval(() => {
            start = start + increment; //start += increment
            if (start >= target) {
                start = target; // to avoid the target 
                clearInterval(timer) //to clear the variable time so it starts the next box from zero
            }
            setCount(Math.floor(start)); //start value only can be the integer - so use floor
            
        },stepTime); //re rendering for chasnges
            

        return () => clearInterval(timer);
    }, [target, duration]); //useCountUp re render function
    return count;
}

//if you are returning a UI element no need to use any parameters 
 function StatBox() {

    const students = useCountUp(1000, 2000); //duration in ms
    const alumni = useCountUp(10000, 2000);
    const teachers = useCountUp(200, 2000);

    return (

        <div className="stats-container">
            <div className="stats-box"> <h2>{students}</h2>
                <p>Students</p>
            </div>
                <div className="stats-box">
                    <h2>{teachers}</h2>
                    <p>Teachers</p>
                </div>

                <div className="stats-box">
                    <h2>{alumni}</h2>
                    <p>Alumni</p>
                </div>

            </div>
       



    )

}

export default StatBox