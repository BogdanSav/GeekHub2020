import React from 'react';
import $ from 'jquery';
let alpha = "abcdefghijklmnopqrstuvwxyz";
function TH(props) {
    let th = [];
    for (let i = 0; i < props.columns; i++) {
        if (i === 0) {
            th[0] = <th key={"thth"}>{'\u00A0'}</th>;
        }
        th.push(<th key={"thth" + i}>{alpha[i].toUpperCase()}</th>);
        console.log(th);
    }
    return th;

};
function TbodyElements(props) {
    let tr = [];
    let names = [];
    if (props.cell == undefined) {

        for (let i = 0; i < props.rows; i++) {
            let tbodyElements = [];
            for (let j = 0; j <= props.columns; j++) {
                if (j === 0) {
                    tbodyElements.push(<th key={"tbth" + i}>{i + 1}</th>);
                } else { tbodyElements.push(<td key={"td" + (j - 1) + (i + 1)}><input key={alpha[j - 1] + (i + 1)} type="text" name={alpha[j - 1] + (i + 1)} /></td>); names.push(alpha[j - 1] + (i + 1)); }
            }
            tr.push(<tr key={"tr" + i}>{tbodyElements}</tr>);
            console.log(tbodyElements);

        }
        console.log(names);
        

    }
  
    //  else {
    //     console.log(props.cell);
    //     let curName = props.cell.split('');
    //     let secondSplited = [];
    //     for (let i = 0; i < props.data.length; i++) {

    //         secondSplited = secondSplited.concat(props.data[i]);
    //     }
    //     console.log(secondSplited);
    //     let names =[];
    //     document.querySelectorAll("input").forEach(function (e) {
    //         names.push(e.name);
    //     });
    //     console.log(names);
    //     let namesOfCells = [];

    //     for (let j = Number(curName[1]); j <= (props.data.length + Number(curName[1])); j++) {
    //         for (let i = alpha.indexOf(curName[0]); i <= (props.data[0].length + alpha.indexOf(curName[0])); i++) {
    //             console.log(i, j);
    //             let nameOfCell = document.getElementsByName((alpha[i] + (j)))[0];
    //             if (nameOfCell) {
    //                 namesOfCells.push(nameOfCell);
    //             }

    //         }

    //     }
    //     console.log(namesOfCells)
    //     namesOfCells.forEach(function (item, index) {
    //         item.value = secondSplited[index];
    //     });
    // }


    return tr;

}




export default function Table(props) {
    let { columns, rows, cell, data } = props;
    return (
        <table>
            <thead>
                <tr>
                    <TH columns={columns} />
                </tr>
            </thead>
            <tbody>
                <TbodyElements columns={columns} rows={rows} />
                
            </tbody>
        </table>);
};
