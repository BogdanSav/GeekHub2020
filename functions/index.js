 document.querySelectorAll('input[name], #formula ,#condition').forEach(function(input) {
     input.addEventListener('keyup', function() {
         let a1 = document.querySelector('[name="a1"]');
         let b1 = document.querySelector('[name="b1"]');
         let a2 = document.querySelector('[name="a2"]');
         let b2 = document.querySelector('[name="b2"]');
         let formula = document.querySelector('#formula');
         let condition = document.querySelector('#condition');
         let result = document.querySelector('#result');

         try {


             let calc = new Function('a1,b1,a2,b2', 'return ' + formula.value + ';');
             let Condition = new Function('a1,b1,a2,b2', 'return ' + condition.value + ";");

             if (Condition(Number(a1.value), Number(b1.value), Number(a2.value), Number(b2.value))) {
                 result.style.backgroundColor = "#b6d7a8";
             } else result.style.backgroundColor = "#fff";

             result.value = calc(Number(a1.value), Number(b1.value), Number(a2.value), Number(b2.value));

         } catch (error) {
             result.value = "#ERROR";
             console.error(error.message);
         }
     });

 });