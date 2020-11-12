let rowInd, colInd;
jQuery('tr').on('click', function(e) {
    rowInd = e.currentTarget.rowIndex;
});
jQuery('td').on('click', function(e) {
    colInd = e.currentTarget.cellIndex;
});

jQuery('input').on('paste', function(e) {
    e.preventDefault();

    var text = e.originalEvent.clipboardData.getData('text/plain');
    let table = document.querySelector('#table');
    var input = e.currentTarget;


    let data = text.split("\n");
    let splitedData = [];
    data.forEach(element => {
        splitedData.push(element.split(';'));
    });

    for (let i = rowInd; i < (splitedData.length); i++) {
        let tr = document.createElement('tr');
        for (let j = colInd; j < (splitedData[i].length); j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }






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