 const str = "Привет! Как дела";
 var vowels = "аиеёоуыэюя";
 var res = "";
 
 for (var i = 0; i <= str.length; i++) {
         for(var j=0; j<vowels.length; j++){
             if(str[i] ===vowels[j])
             {
                res += str[i]
             }
         }

 }
 console.log(res);




	

