module.exports = function longestConsecutiveLength(array) {
  	var tempArr=[];
  	var cont=1;
   array.sort((l,r)=>l-r);
   for(let i=1;i<array.length;i++){
   		if(array[i]===array[i-1]+1){
   			cont++
   		} else{
        if(array[i]!==array[i-1]){
            if(cont>1){
             tempArr.push(cont);
            }
            cont=1;
        } 
	
   		}
   		
   		
   }
  return array.length<2? array.length:tempArr.sort((l,r)=>r-l)[0] ;

 
   
}
