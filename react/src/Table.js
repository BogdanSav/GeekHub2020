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

    let row;
    let col;
    if (props.cell) {
        let cell = props.cell.match(/^([a-z]+)(\d+)$/);
        row = Number(cell[2])-1;
        col = alpha.indexOf(cell[1])+1;
        console.log(row,col);
    }
    for (let i = 0; i < props.rows; i++) {
        let tbodyElements = [];
        for (let j = 0; j <= props.columns; j++) {
            if (j === 0) {
                tbodyElements.push(<th key={"tbth" + i}>{i + 1}</th>);
            }
            else if (i >= row && j >= col && i - row < props.data.length && j - col < props.data[0].length) {
                tbodyElements.push(<td key={"td" + (j - 1) + (i + 1)}><input key={alpha[j - 1] + (i + 1)} type="text" name={alpha[j - 1] + (i + 1)} value={props.data[i- row][j - col]} /></td>);
            }
            else {
                tbodyElements.push(<td key={"td" + (j - 1) + (i + 1)}><input key={alpha[j - 1] + (i + 1)} type="text" name={alpha[j - 1] + (i + 1)} /></td>);

            }
        }
        tr.push(<tr key={"tr" + i}>{tbodyElements}</tr>);
        console.log(tbodyElements);

    }
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
                <TbodyElements columns={columns} rows={rows} cell={cell} data={data} />

            </tbody>
        </table>);
};
