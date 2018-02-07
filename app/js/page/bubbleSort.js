var array = [1,3,4,2,5]
var bubbleSort = () => {
  var length = array.length;
  for(var i=0; i<length; i++) {
    for(var j=0; j<length-i-1; j++){
      if (array[j]>array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  console.log(array);
}

bubbleSort()
