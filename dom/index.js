jQuery('input').on('paste', function(e) {
    e.preventDefault();

    var text = e.originalEvent.clipboardData.getData('text/plain');
    let thead = document.querySelector('#table thead tr');
    let tbody = document.querySelector("#tbody")
    let tbodytr = document.querySelectorAll('#tbody tr');
    console.log(tbodytr);

    var input = e.currentTarget;
    let currentName = input.name.split('');
    console.log(currentName);


    let names = [];
    let splitedData = [];

    text.split("\n").forEach(element => {
        splitedData.push(element.split(';'));
    });
    console.log(splitedData);
    let secondSplited = [];
    for (let i = 0; i < splitedData.length; i++) {

        secondSplited = secondSplited.concat(splitedData[i]);
    }
    console.log(secondSplited);


    function addThead(array, curName) {
        let aplphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i <= (array.length + aplphabet.indexOf(curName[0])); i++) {
            if (!thead.children[i]) {
                let th = document.createElement('th');
                th.innerHTML = aplphabet[i - 1].toUpperCase();
                thead.appendChild(th);
            }

        }
    }

    function addElements(curName, array) {
        let aplphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = aplphabet.indexOf(curName[0]); i < (array.length + aplphabet.indexOf(curName[0])); i++) {

            for (let j = Number(curName[1]); j < (array[0].length + Number(curName[1])); j++) {
                if (!tbody.children[j - 1]) {
                    let tr = document.createElement('tr');
                    tr.innerHTML = "<th>" + j + "</th>";
                    for (let k = 0; k < array.length + aplphabet.indexOf(curName[0]); k++) {
                        if (!tr[k]) {
                            let td = document.createElement('td');
                            td.innerHTML = '<input type=text name="' + aplphabet[k] + (j) + '" value=""/>';
                            tr.appendChild(td);
                        }
                    }
                    tbody.appendChild(tr);
                }


            }

        }
        for (let h = 0; h < 2; h++) {
            for (let k = 0; k < array.length + aplphabet.indexOf(curName[0]) + 1; k++) {
                if (!tbodytr[h].children[k]) {
                    let td = document.createElement('td');
                    td.innerHTML = '<input type=text name="' + aplphabet[k - 1] + (h + 1) + '" value=""/>';
                    tbodytr[h].appendChild(td);
                }
            }
        }

        document.querySelectorAll("input").forEach(function(e) {
            names.push(e.name);
        });
        // console.log(names);
        let namesOfCells = [];

        for (let j = Number(curName[1]); j < (array[0].length + Number(curName[1])); j++) {
            for (let i = aplphabet.indexOf(curName[0]); i <= (array.length + aplphabet.indexOf(curName[0])); i++) {
                console.log(i, j);
                let nameOfCell = document.getElementsByName((aplphabet[i] + (j)))[0];
                if (nameOfCell) {
                    namesOfCells.push(nameOfCell);
                }

            }

        }
        namesOfCells.forEach(function(item, index) {
            // console.log(item.name, index);
            item.value = secondSplited[index];
        });

    }



    addThead(splitedData, currentName);
    addElements(currentName, splitedData);

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