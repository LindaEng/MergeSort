function split(wholeArray){
  let wholeArrayLength = wholeArray.length
  let subArraySize = Math.floor(wholeArrayLength/2)
  let firstHalf = subArraySize
  let secondHalf = wholeArrayLength - subArraySize


  return [firstHalf, secondHalf]
}

function merge(left,right){
  let finalArr = [];
  while(left.length || right.length){
      if(left[0] < right[0]){
       finalArr.push(left[0])
       left.shift()
      }
      else{
       finalArr.push(right[0])
       right.shift()
      }
  }
  if(left.length > 0){
    finalArr.concat(left)
  }else{
    finalArr.concat(right)
  }
  return finalArr
}

function mergeSort(array){
  //basecase
  if(array.length <= 1){
    return array
  }
  //recursive
  let subArrays = split(array) //[[a],[b]]
  let subArray1 = split(subArray[0])
  let subArray2 = split(subArray[1])
  //for(let i = 0; i)
}
