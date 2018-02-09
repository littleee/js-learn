var array = [1,5,3,2,4]
var selectionSort = () => {
  let length = array.length
  let indexMin
  for(let i=0; i<length-1; i++){
    indexMin = i
    for (let j=i+1; j<length; j++){
      array[indexMin] > array[j] ? indexMin = j : indexMin
    }
    i !== indexMin ? [ array[i], array[indexMin] ] = [ array[indexMin], array[i] ] : array[i]
  }
  console.log(array);
}
selectionSort()
