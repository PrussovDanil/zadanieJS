var str = "Привет! Как дела ?";
 
 var res = "";
 



 function getVowels(str){
    let vowels = "аиеёоуыэюя";
    for (var i = 0; i <= str.length; i++) {
         for(var j=0; j<vowels.length; j++){
            if(str[i] ===vowels[j]){

                res += str[i];

            //  {  delete str[i];
            //     console.log( str[i]);
            }
        }
    }
    return res;              
}
 console.log(getVowels(str));




	

