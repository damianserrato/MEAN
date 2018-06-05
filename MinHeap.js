function minHeap(arr, num) {
  var temp = 0;
  for(var i = arr.length -1; i>0; i-- ) {
    if (num < arr[i]) {
      continue;
    }
    else if(num > arr[i] || typeof arr[i] !== "number") {
      for( var j = arr[i]; j<arr.length; j++){
        temp = arr[i+1];
        arr[i+1] = num;
        num = temp;
      }
    }
  }
  console.log(arr);
}

let arr1 = [true,1,2,3,4,5,6];
let num1 = 0;

minHeap(arr1,num1);