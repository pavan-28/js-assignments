function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   array=[]
   for(let i=0;i<arr.length;i++){
       if(arr[i]%2==0){
           array.push(arr[i])
       }
   }
   return array

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   array1=[]
   for(let i=0;i<arr.length;i++){
       array1.push(arr[i]*n)
   }
   return array1
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */ for (let i=0;i<arr.length;i++){
        if(i==n){
            arr.splice(i,1)
        }
    }
    return arr

}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}