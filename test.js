array = [1, 2,3,4,5];
describe("sum", function () {

    it("sum of array[1, 2, 3, 4, 5] is 15", function () {
        assert.equal(sumArray(array), 15);
    })  
});


describe("Multiply", function () {

    it("Multiply of array = [1, 2, 3, 4, 5] is 24", function () {
        assert.equal(mutliply(array), 120);
    })  
});


const x= "Hello! My name is Meron!"
describe("Reverse String", function () {

    it("Reverse string of x = Hello! My name is Meron! is !noreM si eman yM !olleH", function () {
        assert.equal(reverseStr(x), "!noreM si eman yM !olleH");
    })  
});


const array2 = ["Meron", "Tedros", "Hadera"];

describe("filter Long Words", function () {

    it("filtering Long words of x = [Meron, Tedros, Hadera] when num = 5 is [Tedros, Hadera]", function () {
        assert.deepEqual(filterLongWords(array2, 5), ["Tedros", "Hadera"]);
    })  
});






