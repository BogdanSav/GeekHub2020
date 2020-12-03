import React from 'react';
let alpha = "abcdefghijklmnopqrstuvwxyz";
function TH(props) {
    let th = [];
    for (let i = 0; i < props.columns; i++) {
        if (i === 0) {
            th[0] = <th>{'\u00A0'}</th>;
        }
        th.push(<th key={"th" + i}>{alpha[i].toUpperCase()}</th>);
        console.log(th);
    }
    return th;

};
function Td(props){
    return(<td><input type="text" name = {props.name}/></td>);
}
function TbodyElements(props) {

    let tr = [];
    
    for ( let i = 0 ; i< props.rows;i++){
        let tbodyElements =[];
        for( let j = 0; j <= props.columns; j++){
            if(j===0){
                tbodyElements.push(<th key = {"tbth" + i}>{i+1}</th>);
            }else tbodyElements.push(<td key={alpha[j-1]+(i+1)}><input key ={alpha[j-1]+(i+1)} type="text" name = {alpha[j-1]+(i+1)}/></td>);
        }
        tr.push(<tr key={"tr" +i}>{tbodyElements}</tr>);
        console.log(tbodyElements);
       
    }
    
   
    return  tr;
    
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
                <TbodyElements columns={columns} rows={rows}/>
            </tbody>
        </table>);
};
