// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums((map)=>map+mynums)
// console.log(newnums);




// let mynums=[22,33,44,55,66,77,88]
// let newnum=mynums.map((bk)=>bk+10)
// console.log(newnum);

// const mynum=[1,2,3,4,5,6,7,8,9]
// const newnum=mynum
//          .map((num)=>num*10)
//          .map((num)=>num+1)
//          .filter((num)=>num>=40)
//          console.log(newnum);

car = ['ferari', 'lamborghini', 'ford', 'porsche', 'Volkswagen', 'Aston Martin']

// console.log('=== Car Length Greater than 8 ====')
length_greater = car.filter(function (car) {
    return car.length>=8
})

console.log(length_greater)