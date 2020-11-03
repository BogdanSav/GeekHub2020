document.querySelector('#user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let rules = {
        name: /^[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+$/,
        email: /^([^@.][a-zA-Z0-9.-]+)[^.@]@[^.@][a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+[^.@]$/,
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

        if (button.getAttribute('id') == "btn2") {
            document.querySelector('#btn1').classList.remove('active');
            document.querySelector('#btn2').classList.add('active');
        } else {
            document.querySelector('#btn2').classList.remove('active');
            document.querySelector('#btn1').classList.add('active');
        }
        document.querySelector('#description').classList.add('d-none');
        document.querySelector('#preview').classList.add('d-none');

        let description = document.querySelector('#description');
        let preview = document.querySelector('#preview');

        let textRules = {
            strong: /[+][+](\w+)[+][+]/,
            italic: /[-][-](\w+)[-][-]/,
            images: /\((https\:\/\/)(.+)(.jpg|.png)\)/i,
            sites: /(https\:\/\/)(.+)/i,
        };
        let replace = {
            strong: "<strong> $1 </strong>",
            italic: "<i> $1</i>",
            images: ' <img src="$1$2$3"/>',
            sites: ' <a href="$1$2"/>$1$2</a>',
        };
        let splited = description.value.split(" " || ", " || ". ");

        function replaceByRule(input, rules, replaces) {
            let result = "";
            for (let i = 0; i < input.length; i++) {
                if (rules.strong.test(input[i])) {
                    result += input[i].replace(rules.strong, replaces.strong);

                } else if (rules.italic.test(input[i])) {
                    result += input[i].replace(rules.italic, replaces.italic);

                } else if (rules.images.test(input[i])) {
                    result += input[i].replace(rules.images, replaces.images);
                } else if (rules.sites.test(input[i])) {
                    result += input[i].replace(rules.sites, replaces.sites);
                } else result += " " + input[i];

            }
            return result;


        }
        preview.innerHTML = replaceByRule(splited, textRules, replace);

        document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');

    });
});