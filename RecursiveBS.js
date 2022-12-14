function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let mid=Math.floor((rightIndex+leftIndex)/2)
    if(target===arr[mid]){
     return mid
    }
    if (target <arr[mid]) {
       return search(arr,target,leftIndex,mid-1)
    }else{
        return search(arr,target,mid+1,rightIndex)
    }   
}

console.log(recursiveBinarySearch([-5,2,4,6,10],10))//4
console.log(recursiveBinarySearch([-5,2,4,6,10],6))//3
console.log(recursiveBinarySearch([-5,2,4,6,10],20))//-1
//Big-O=O(log n)