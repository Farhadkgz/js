function countdown() {
    let count = 10;
    
    const timer = setInterval(() => {
    console.log(count);
    count--;
    

    if (count === 0) {
      clearInterval(timer);
      console.log("Время истекло!");
    }
    }, 1000);
    }
    
    countdown();