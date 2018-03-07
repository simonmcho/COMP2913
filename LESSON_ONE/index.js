// function test() {
//     this.nums = [1, 2, 3, 4];
// }

// const testA = new test();

// testA.nums.forEach( function(num) {
//     this.nums.push(num * 2);
// });

// console.log(this.nums);

const person1 = {
    getName: function() {
        return 'SIMON'
    },
    getAge() {
        return 29
    }
}

console.log(person1.getName())
console.log(person1.getAge());