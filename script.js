function lifeInWeeks(age) {
   
    //   /************Don't change the code above************/    
         
    
    const daysLeft = (90 - age) * 365;
            
    const weeksLeft = Math.floor(daysLeft / 7);
    
    const monthsLeft = Math.floor(daysLeft / 30);
    
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
       
    
    
    
          
         
         
         
         
    //   /*************Don't change the code below**********/
      }
      lifeInWeeks(25);