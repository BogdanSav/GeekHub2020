document.querySelector('#user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let nameRule = /[a-їА-ї]+\s+[a-їА-ї]+\s+[a-їА-ї]+$/;
    let emailRule = /^[^@][a-zA-Z0-9.-]+[^\.]@[^\.][a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+[^@]$/;
    let passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/;
    let name = document.querySelector('[name="full_name"]');
    let email = document.querySelector('[name="email"]');
    let password = document.querySelector('[name="password"]');
    // let rules = [/[a-їА-ї]+\s+[a-їА-ї]+\s+[a-їА-ї]+\s?/,
    //     /^[^@][a-zA-Z0-9.-]+[^\.]@[^\.][a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+[^@]\s?/,
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/
    // ];
    if (!nameRule.test(name.value)) {
        name.style.backgroundColor = "#F9D0C4";
    } else name.style.backgroundColor = "#C2E0C6";
    if (!emailRule.test(email.value)) {
        email.style.backgroundColor = "#F9D0C4";
    } else email.style.backgroundColor = "#C2E0C6";
    if (!passwordRule.test(password.value)) {
        password.style.backgroundColor = "#F9D0C4";
    } else password.style.backgroundColor = "#C2E0C6";
});

document.querySelectorAll('[data-show]').forEach(function(button) {
    button.addEventListener('click', function(e) {
        document.querySelector('#description').classList.add('d-none');
        document.querySelector('#preview').classList.add('d-none');

        document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
    });
});