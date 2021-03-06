

 //Question 1
 function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

//Question 2
function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>c && b>a)
    {
        return b;
    }
    else{
        return c;
    }
}

//Question 3
function isVowel(a){
    var b = a.toUpperCase();
    if(b.length===1 && (b==="A" || b==="E" || b==="I" || b==="O" || b==="U")){
        return true;
    }else{
        return false;
    }
}

//Question 4-a
function sum(x){
    let sum=0;
    for(let i=0; i<x.length; i++){
        sum=sum+x[i];
    }
    return sum;

}

//Questiono 4-b
function multiply(y){
    let mult=1;
    for(let i=0; i<y.length;i++){
        mult=mult*y[i];
    }
    return mult;
}


//Question 5
function reverse(z){
    let rev ="";
    for(let i=z.length; i>=0; i--){
        rev = rev+z.charAt(i);
    }
    return rev;
}

//Question 6
function findLongestWord(a){
    let len=a[0].length;
    for(let i=1; i<a.length; i++){
        if(len<a[i].length){
            len = a[i].length;
        }
    }
    return len;
}

//Question 7
function filterLongWords(a, num){
    let x=[];
    for(let i=0; i<a.length; i++){
        if(a[i].length>num){
            x.push(a[i]);
        }
    }
    return x;
}


// // Question 8-a
// const a = [1,3,5,3,3]; 

// const b = a.map(function(elem, i, array){
//     return elem * 10;
// })
// document.writeln(b.toString() + "<br/>");


// //Question 8-b
// const c = a.filter(function(elem, i, array){
//     return elem === 3;});
// document.writeln(c.toString() + "<br/>");


// //Question 8-c
// const d = a.reduce(function(prevValue, elem, i, array){
//     return prevValue * elem;
//     });
// document.writeln(d+ "<br/>");



/* runs test to see if expected argument is === to value returned */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}


/* runs test to see if expected argument is equal to the value returned to the one that returns array*/
function isEqual(expected, found) {
    // if length is not equal
    if (expected.length != found.length) {
        return "TEST FAILED. Expected " + expected + " found " + found;
    } else {
        // comapring each element of array
        for (var i = 0; i < expected.length; i++) {
            if (expected[i] != found[i])
                return "TEST FAILED. Expected " + expected + " found " + found;
        }
        return "TEST SUCCEEDED";
    }
}



console.log("The max number between 10 and 20 is 20-"+myFunctionTest(20,max(10, 20)));
console.log("The max of three numbers is going to be 30 -" +myFunctionTest(30, maxOfThree(10, 20, 30)));
console.log("E is a vowel -" + myFunctionTest(true, isVowel("E")));
console.log("o is not a vowel -" + myFunctionTest(false, isVowel("o")));
console.log("The total sum of the arry is 15 -"+myFunctionTest(15, sum([1,2,3,4,5])));
console.log("The multiple of the arry is 120 - " + myFunctionTest(120, multiply([1,2,3,4,5])));
console.log("Reverse of a string is norem - " + myFunctionTest("norem",reverse("meron")));
console.log("The longest length word in the array is 7 - " + myFunctionTest(7,findLongestWord(["mer", "meron", "Tedross" ])));

console.log("The array with a length greater than 4 is [ Natnael, Gebrsh, Yafiet] -  "+isEqual(["Natnael" ,"Gebrsh", "Yafiet" ], filterLongWords(["mer", "Natnael", "Gebrsh", "Yafiet", "Ghid"], 4)));
console.log("The array with a length greater than 4 is [ Natnael, Gebrsh, Yafiet] -  "+isEqual([ "Gebrsh", "Yafiet" ], filterLongWords(["mer", "Natnael", "Gebrsh", "Yafiet", "Ghid"], 4)));
