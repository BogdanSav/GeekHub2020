document.querySelectorAll('input[name], #formula').forEach(function(input) {
    input.addEventListener('keyup', function() {
        let a1 = document.querySelector('[name="a1"]');
        let b1 = document.querySelector('[name="b1"]');
        let a2 = document.querySelector('[name="a2"]');
        let b2 = document.querySelector('[name="b2"]');
        let formula = document.querySelector('#formula');
        let result = document.querySelector('#result');
        let calc = (a1, b1, a2, b2) => {
            return formula.value;
        }
        result.value = calc(Number(a1.value), Number(b1.value), Number(a2.value), Number(b2.value));
    });

});