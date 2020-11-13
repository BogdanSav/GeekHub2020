jQuery('input').on('paste', function(e) {
    e.preventDefault();

    var text = e.originalEvent.clipboardData.getData('text/plain');
    let thead = document.querySelector('#table thead tr');
    let tbody = document.querySelector("#tbody")
    let tbodytr = document.querySelectorAll('#tbody tr');
    var input = e.currentTarget;
    let currentName = input.name.split('');
    console.log(currentName);
    let names = [];
    let splitedData = [];
    text.split("\n").forEach(element => {
        splitedData.push(element.split(';'));
    });
    console.log(splitedData);

    document.querySelectorAll("input").forEach(function(e) {
        names.push(e.name);
    });
    console.log(names);

    function addRowsAndCells(curName, array) {



        let alphabet = 'abcdefgh1jklmnopqrstuvwxyz';
        for (let j = Number(curName[1]); j < (array.length + Number(curName[1])); j++) {
            for (let i = alphabet.indexOf(curName[0]); i < (array[0].length + alphabet.indexOf(curName[0])); i++) {
                let item = document.getElementsByName(alphabet[i] + j)[0];
                if (!item) {
                    if (document.getElementsByName(alphabet[i - 1] + j)) {
                        let th = document.createElement('th');
                        th.innerHTML = alphabet[i].toUpperCase();
                        thead.appendChild(th);
                        for (let k = 0; k < tbodytr.length; k++) {
                            let colItem = tbodytr[k].appendChild(document.createElement('td'));
                            colItem.innerHTML = '<input type="text" name="' + alphabet[i] + j + '" value=""/>';
                        }
                        item = document.getElementsByName(alphabet[i] + j)[0];
                    } else {
                        let tr = document.createElement('tr');
                        tr.innerHTML = '<th>' + j + '</th>';
                        tbody.appendChild(tr);
                        for (let k = 0; k < tbodytr.length - 1; k++) {
                            let colItem = tbodytr[k].appendChild(document.createElement('td'));
                            colItem.innerHTML = '<input type="text" name="' + alphabet[i] + j + '" value=""/>';
                        }
                        item = document.getElementsByName(alphabet[i] + j)[0];
                    }
                }
                item.value = array[j - Number(curName[1])][i - alphabet.indexOf(curName[0])];

            }

        }

    }
    addRowsAndCells(currentName, splitedData)
        // for (let j = Number(curName[1]); j < (array.length + Number(curName[1])); j++) {
        //     for (let i = alphabet.indexOf(curName[0]); i < (array[0].length + alphabet.indexOf(curName[0])); i++) 




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