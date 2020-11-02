document.querySelector('#user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let rules = {
        name: /[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+$/,
        email: /^[^@\.][a-zA-Z0-9.-]+[^\.]@[^\.][a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+[^@]$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/
    };
    let fields = {
        name: document.querySelector('[name="full_name"]'),
        email: document.querySelector('[name="email"]'),
        password: document.querySelector('[name="password"]')
    }

    function checkRule(rule, field) {
        for (key in rule) {
            if (!rule[key].test(field[key].value)) {
                field[key].style.backgroundColor = "#F9D0C4";
            } else field[key].style.backgroundColor = "#C2E0C6";
        }
    }
    checkRule(rules, fields);
});

document.querySelectorAll('[data-show]').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#description').classList.add('d-none');
        document.querySelector('#preview').classList.add('d-none');
        let description = document.querySelector('#description');
        let preview = document.querySelector('#preview');
        let textRules = {
            strong: /[++][^\s](.+)[^\s][++]/gm,
            italic: /[--][^\s](.+)[^\s][--]/gm,
        };
        let replace = {
            strong: "<strong> $1 </strong>",
            italic: "<i> $1 </i>",
        };
        for (key in textRules) {
            if (textRules[key].test(description.value)) {

                preview.innerHTML = description.value.replace(textRules[key], replace[key]);
            } else preview.innerHTML = description.value;
        }




        document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');


    });
});