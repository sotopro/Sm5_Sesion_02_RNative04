import React, {useState, useEffect} from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();

        const difference = +new Date(`11/11/${year}`) - +new Date();
        let timeLeft = {};
        if(difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // clear timeout if the components is unmounted
        return () => clearTimeout(timer);
    })

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        )
    })

    
    return (
        <div>
            <h1>Hackathon {year} Countdown</h1>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}

export default Countdown;