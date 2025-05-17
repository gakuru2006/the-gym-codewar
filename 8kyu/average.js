function findAverage(array) {
    // your code here
    console.log(array)
    let average;
    let sum=0;
     if(array.length===0){
        return 0;
      }
    for(i=0;i<array.length;i++){
      sum=sum + array[i];
      average=sum / array.length; 
    }
    return average;
  }