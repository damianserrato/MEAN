var arr = [1,2,3,4,5];

function findMax(arr) {
    var num = 0;
    for(var i = 0; i<arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}

function findMin(arr) {
    var num = 0;
    for(var i = 0; i<arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;
}

function findAvg(arr) {
    var num = 0;
    for(var i = 0; i<arr.length; i++) {
        num = num+arr[i];
    }
    return num;
}

var max = findMax(arr);
var min = findMin(arr);
var avg = findAvg(arr);

console.log("The minimum is " + min + ", the maximum is " + max +  ", and the average is " + avg);