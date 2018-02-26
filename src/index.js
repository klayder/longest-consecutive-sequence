module.exports = function longestConsecutiveLength(array) {
  	var tempArr=[];
  	var cont=1;
      array.sort((l,r)=>l-r);
   for(let i=1;i<array.length;i++){
   		if(array[i]===array[i-1]+1){
   			cont++
   		} else{
        if(array[i]!==array[i-1]){
            if(cont>0){
             tempArr.push(cont);
            }
            cont=1;
        } 
   		}
 		
   		
   }
   if(tempArr.length==0||tempArr.length==1||array.length==1){
     return array.length==0?0:1;
   }
  return tempArr.length<2? tempArr.length:tempArr.sort((l,r)=>r-l)[0] ;
}
