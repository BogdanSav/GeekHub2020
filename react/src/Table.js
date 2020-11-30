import React from 'react';
let alpha = "abcdefghijklmnopqrstuvwxyz"
function TH (props){
   let th =[];
   for(let i =0; i<props.columns ;i++){
       if(i===0){
          th[0] = <th>{'\u00A0'}</th>;
       }
       th.push(<th key={"th"+i}>{alpha[i].toUpperCase()}</th>);
       console.log(th);
   }
   return th;
   
};
function Tr(props){
    let tr =[];
   
    let td = [];
    for(let i = 0 ;i<props.rows;i++){
       
        for(let j = 0; j < props.columns; j++){
           
        if(j===0){
            td.push(<th>{j+1}</th>);
        }
        td.push(<td><input type ="text" name={alpha[j]+(j+1)}/></td>);  
        tr[i] = <tr>{td}</tr>
    }
    }
    
  
    console.log(tr);
    return tr;


    
}
    
export default function Table(props) {
    let { columns, rows, cell, data } = props;
    return ( 
        <table> 
            <thead>
                <tr>
                   <TH columns={columns}/>
                </tr>
            </thead>
            <tbody>
                <Tr rows ={rows} columns={columns}/>
            </tbody>
        </table> );
    };
