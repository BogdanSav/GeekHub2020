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
        for (let i = 0; i < props.rows; i++) {
            let tbodyElements = [];
            for (let j = 0; j <= props.columns; j++) {
                if (j === 0) {
                    tbodyElements.push(<th key={"tbth" + i}>{i + 1}</th>);
                }
                
                else { tbodyElements.push(<td key={"td" + (j - 1) + (i + 1)}><input key={alpha[j - 1] + (i + 1)} type="text" name={alpha[j - 1] + (i + 1)} /></td>); 
                // names.push(alpha[j - 1] + (i + 1)); 
            }
            }
            tr.push(<tr key={"tr" + i}>{tbodyElements}</tr>);
            console.log(tbodyElements);

        }
        if(props.cell!=undefined){
            let curCell = props.cell.split("");
            console.log(curCell);
            for(let i = Number(curCell[1]); i<= props.columns;i++){
                for (let j = alpha.indexOf(curCell[0]);  j< props.rows; j++){
                    let elem = document.getElementsByName(alpha[j]+(i));
                    console.log(alpha[j]+(i));
                    if(elem){
                        names.push(elem);
                    }
                }
            }
            console.log(names);
            names.forEach(function(input, index){
                input.value ="1"
                console.log(input.value);
            });
            
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
                <TbodyElements columns={columns} rows={rows} cell={cell} data={data}/>
                
            </tbody>
        </table>);
};
