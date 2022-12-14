function recursionFibonaci(n){
    if (n<2) {
        return n
    }
    return recursionFibonaci(n-1)+recursionFibonaci(n-2)
}

console.log(recursionFibonaci(0))//0
console.log(recursionFibonaci(1))//1
console.log(recursionFibonaci(6))//8

//O(n)-Iteration