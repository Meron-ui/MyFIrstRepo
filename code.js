

      //Question 4-a calculalting sum of an array
      function sumArray(a){
        return a.reduce((accumulator, elem)=> accumulator+elem, 0);
      }

        function mutliply(b){
          return b.reduce((accumulator, elem)=>accumulator*elem, 1);
        }
      
      //Question 5
        function reverseStr(str){
            return str.split("").reduce((rev, char)=>char + rev, '');
        }

      //Question 7
      function filterLongWords(c, num){
        return c.filter(x=>(x.length>num));
      }
