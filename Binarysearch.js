function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
   

    while(leftIndex<=rightIndex){
        let mid=Math.floor((rightIndex+leftIndex)/2)
         if(target===arr[mid]){
          return mid
         }
        if(arr[mid]< target){
             leftIndex=mid+1
        }else 
            rightIndex=mid-1   
    }
    return -1
    
}

console.log(binarySearch([-5,2,4,6,10],10))//4
console.log(binarySearch([-5,2,4,6,10],6))//3
console.log(binarySearch([-5,2,4,6,10],20))//-1
//Big-O=O(log n)