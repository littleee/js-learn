let array = [5,4,3,2,1]
let insertionSort = () => {
  let length = array.length, j, temp
  for (var i=1; i<length; i++){
    j = i
    temp = array[i]
    while (j>0 && array[j-1] > temp) {
      [array[j-1],array[j]] = [array[j],array[j-1]]
      j--
    }
    array[j] = temp
  }
}

insertionSort()
