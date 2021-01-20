import React, { useState, useEffect } from 'react';

function Timer() {
  const [interval, setInter] = useState({
   
        minutes:"00",
        seconds:"00"
    
  });

  useEffect(() => {
    startTimer();
  }, []);


  const startTimer =() =>{
    const countDownTime = Date.now() + 30000  

         const timerID= setInterval(()=>{
        const now = new Date();
        const distance = countDownTime - now
        

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60 * 60)) / 1000);

        if(distance<0){
            clearInterval(timerID);
            setInter({
                
                    minutes:"00",
                    seconds:"00"
                
            });
            alert("Quiz Ended")

        }else {
            setInter({
                
                    minutes,
                    seconds,
                
            })
        }
    },1000)

}


  
  return (
    <div >
      <h5>{interval.minutes}:{interval.seconds}</h5>
    </div>
  );
}

export default Timer;
