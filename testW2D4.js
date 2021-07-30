//Question one: Filtering banned words
const bannedWords =["sad", "unhappy", "not"];
describe("Filter",function(){
    let expected="My friend is happy with his new car, and he feel happy about it!";
    
    it(`The result after filtering the words [${bannedWords}] from the string is ... ${expected}`,function(){
        assert.equal("My friend is not happy unhappy with his new car, and he feel sad happy about it!".filterString(bannedWords),expected);
    });

});


//Question two: buble sort
const arr1 = [12, -4, 2, 0, 10, 1];
describe("BubbleSort", function(){
    let expected=[-4, 0, 1, 2, 10, 12 ];
    it(`The result of sorting the items in [${arr1}] is ....[${expected}]`,function(){
        assert.deepEqual(arr1.bubbleSort(),expected);
    });
});























// array = [1, 2,3,4,5];
// describe("sum", function () {

//     it("sum of array[1, 2, 3, 4, 5] is 15", function () {
//         assert.equal(sumArray(array), 15);
//     })  
// });


// describe("Multiply", function () {

//     it("Multiply of array = [1, 2, 3, 4, 5] is 24", function () {
//         assert.equal(mutliply(array), 120);
//     })  
// });


// const x= "Hello! My name is Meron!"
// describe("Reverse String", function () {

//     it("Reverse string of x = Hello! My name is Meron! is !noreM si eman yM !olleH", function () {
//         assert.equal(reverseStr(x), "!noreM si eman yM !olleH");
//     })  
// });


// const array2 = ["Meron", "Tedros", "Hadera"];

// describe("filter Long Words", function () {

//     it("filtering Long words of x = [Meron, Tedros, Hadera] when num = 5 is [Tedros, Hadera]", function () {
//         assert.deepEqual(filterLongWords(array2, 5), ["Tedros", "Hadera"]);
//     })  
// });






