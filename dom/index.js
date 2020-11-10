jQuery('input').on('paste', function(e) {
    e.preventDefault();

    var text = e.originalEvent.clipboardData.getData('text/plain');
    var input = e.currentTarget;
    let data = text.split("\n");
    let splitedData = [];

    for (let i = 0; i < data.length; i++) {
        splitedData.push(data[i].split(";"));

    }
    console.log(splitedData);




});

var currentColumn;

jQuery('thead th').on('contextmenu', function(e) {
    e.preventDefault();

    currentColumn = e.currentTarget;

    var menu = jQuery('#column-menu');

    menu.addClass('d-block');

    menu.css({
        left: e.clientX,
        top: e.clientY
    });
});

jQuery('#column-menu [data-action]').on('click', function(e) {
    e.preventDefault();

    var action = e.currentTarget.getAttribute('data-action');

    switch (action) {
        case 'add-left':

            break;

        case 'add-right':

            break;

        case 'remove':

            break;
    }

    jQuery('#column-menu').removeClass('d-block');
});