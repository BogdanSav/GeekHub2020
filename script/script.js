document.querySelectorAll('input[name], #formula').forEach(function(input) {
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
            result.value = calc(Number(a1.value), Number(b1.value), Number(a2.value), Number(b2.value));
            let checkCondition = new Function('a1,b1,a2,b2',
                'if(' + condition.value + '){ result.style.backgroundColor = "green"; } else result.style.backgroundColor ="white"');
            checkCondition(Number(a1.value), Number(b1.value), Number(a2.value), Number(b2.value));

        } catch (error) {
            result.value = "#ERROR";
            // console.error(error.message);
        }
    });

});