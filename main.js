const showTime=()=>{
    let time = new Date()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    result.innerHTML =`${hour} : ${minutes} : ${seconds}`
   }
   setInterval(showTime,1000)
   showTime()
