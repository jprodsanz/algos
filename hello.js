// Arrays To Do Part 1 - Solving Algos by Pablo

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.

function pushFront(xArray, xValue) {
    xNewArray = [];

    for (let i=0; i <xArray.length; i++){
        xNewArray[i + 1] = xArray[i];
    }
    xNewArray[0] = xValue;
    return xNewArray;
}
xSolution=pushFront([10,20,30], 50);
console.log("Push Solution", xSolution);

// Pop
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able tp do this without it though!

function popFront(yArray) {
    yArray = [];
    for (let i=1; i <yArray.length; i++){
        yArray[i-1] = yArray[i];
    }
    return yArray
}
ySolution=popFront([5,6,7,8,9]);
console.log("Pop Solution", ySolution);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(zArray, index, zValue) {
    zArray[index] = zValue;
    return zArray;
}
zSolution = insertAt([7,15,3],2,7);
console.log("Insert Solution", zSolution);

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0)

function removeAt(aArray, index) {
    newValue = aArray[index];
    newArray = [];
    for (let i=0; i < aArray.length-1; i++) {
        if (i >= index){
            newArray[i] = aArray[i + 1];
        }
        else {
            aArray[i] = aArray[i];
        }
    }
    return newArray;
}
aSolution = removeAt([1,2,3,4,'a','b','c','d'],8);
console.log("Remove Solution:",aSolution);