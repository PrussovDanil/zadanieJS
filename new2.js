
      const workers = [
        {"name":"John ","salary":500},
        {"name":"Mike ","salary":1300},
        {"name":"Linda ","salary":1500}];


        function getWorthyWorkers(workers){
          var name= []
          for(var i=0; i<workers.length ; i++){
            if(1000<workers[i].salary){
              name += workers[i].name;
            }
            }
            return name;}
          
          
          
         

        
    
            console.log(getWorthyWorkers(workers))