document.querySelector('#user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let nameRule = /[a-їА-ї]+\s+[a-їА-ї]+\s+[a-їА-ї]+\s?/;
    let emailRule = /^[^@][a-zA-Z0-9.-]+[^\.]@[^\.][a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+[^@]\s?/;
    let passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/
    let name = document.querySelector('[name="full_name"]');
    let email = document.querySelector('[name="email"]');
    let password = document.querySelector('[name="password"]');
    if (!passwordRule.test(password.value)) {
        password.style.backgroundColor = "red";
    } else password.style.backgroundColor = "white";

});

document.querySelectorAll('[data-show]').forEach(function(button) {
    button.addEventListener('click', function(e) {
        document.querySelector('#description').classList.add('d-none');
        document.querySelector('#preview').classList.add('d-none');

        document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
    });
});