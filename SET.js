const set =new Set([1,2,3])
set.add(4)
console.log(set.has(4))// check presence
set.delete(3)
console.log(set.size)
set.clear()


for (const item of set) {
    console.log(item)
}