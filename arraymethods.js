let arr = [1,2,3,4,5,6,7,8,9]
let ar1 = [10,11,12,13,10]
let nar = []
console.log('arr', arr) 
console.log('ar1', ar1) 
console.log('nar', nar) 
console.log(' ')
 
// 1. concat  
console.log('1. concat')
nar = arr.concat(ar1)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 2. every - Check every element less than 10
console.log('2. every')
nar = arr.every((element)  => {
    return element < 10
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 3. fill 
console.log('3. fill')
nar = ar1.fill('3')
console.log('ar1', ar1)
console.log('nar', nar)
console.log('')

// 4. find
console.log('4. find')
console.log('arr', arr)  
console.log('nar', nar)
console.log('')

// 5. findIndex
console.log('5. findIndex')
nar = arr.findIndex(()=>{
    return arr[5]
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 6. flat
console.log('6. flat')
myArr = [1, 2, [3, [4,[ 5, 6]], 7], 8];
nar = myArr.flat(3)
console.log('arr', myArr)
console.log('nar', nar)
console.log('')

// 7. includes
console.log('7. includes')
nar = arr.includes(8)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 8. indexOf
console.log('8. indexOf')
nar = arr.indexOf(3)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 9. join
console.log('9. join')
nar = arr.join()
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 10. lastIndesOf
console.log('10. lastIndexOf')
nar = arr.lastIndexOf(3)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 11. pop -remove the last element
console.log('11. pop')
nar = arr.pop()
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 12. push -add elements to last
console.log('12. push')
nar = arr.push(9)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 13. Reverse - reverse the array
console.log('13. Reverse')
nar = arr.reverse()
console.log('arr', arr)
console.log('nar', nar)
console.log('')
nar = arr.reverse()

// 14. unshift - enter the elements to last position
console.log('14.  unshift')
nar = arr.unshift(10)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 15. shift - remove the elements form first position
console.log('15. Shift')
nar = arr.shift()
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 16. slice - arr.slice(startingPostion, endingPosition)
console.log('16. slice')
nar = arr.slice(1, 3)
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 17. some
console.log('17. some')
nar = arr.some((element) => {
    return element > 8 // true
})
console.log('arr', arr)
console.log('nar', nar)
nar = arr.some((element) => {
    return element //false
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 18. every 
console.log('18. every')
nar = arr.every((ele) => {
    return ele > 0 // true
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 19. sort
console.log('19. sort')
ar1 = [5,2,7,8,9,5,4,7,6,1,2,]
console.log('arr', ar1)
nar = ar1.sort()
console.log('nar', nar)
console.log('') 

// 20. splice -array.splice(startingIndex, EndingIndex, adding element.....)
console.log('20. splice')
nar = ar1.splice(1, 3, 15)
console.log('arr', ar1)
console.log('nar', nar)
console.log('')

// 21. toString
console.log('22. toString')
let str = 65456
nar = str.toString()
console.log('str', typeof(str))
console.log('nar', nar)
console.log('')

// 22. Filter
console.log('22. Filter')
nar = arr.filter((ele) => {
    return ele > 5 // returns the element greater than the 5
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 23. Reduce 
console.log('23. Reduce')
nar = arr.reduce((add ,elem) => {
    add = add + elem  // Add all the elements in the array
    return add 
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 24. Map - returns array
console.log('24. Map')
nar = arr.map((elem) => {
    return elem * 3
})
console.log('arr', arr)
console.log('nar', nar)
console.log('')

// 25. forEach - Traversing each element and index
console.log('25. forEach')
console.log('arr', arr)
arr.forEach(display)
function display(element, index) {
    console.log('element', element, 'index', index)
}
 