import React from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import './Table.css'

const Table = ({tableTitles, tableData}) => {
    return (
        <div className="Table">
            <div className="TableTitle">
                <div className="TitleHeader">
                    {tableTitles.map((title, key) => (
                        <span className="TopColumn" key={key}>
                            {title}
                        </span>
                    ))}
                    <span className="TopColumn">Deletar</span>
                </div>
            </div>
            <div className="TableBody">
                {tableData?.map((values, key) => {
                    const allValue = () => {
                        let elem = [];

                        for(let val in values){
                            elem.push(values[val]);
                        }

                        return elem;
                    }

                    return(
                        <div className="TableRow" key={key}>
                            {allValue().map((item, key) => {
                                return (
                                    <span className="TableItem" key={key}>{item}</span>
                                )
                            })}
                            <div className="TableItem"><DeleteButton/></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Table;
// import React from "react";
// import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
// import './Table.css'

// const Table = ({tableData}) => {
//     return (
//         <div className="Table">
//             <table>
//                 <tbody>
//                         {tableData.map((values, key) => {
//                             const allValue = () => {
//                                 let elem = [];

//                                 for(let val in values){
//                                     elem.push(values[val]);
//                                 }

//                                 return elem;
//                             }

//                             return(
//                                 <tr key={key}>
//                                     {allValue().map((item, key) => {
//                                         return (
//                                             <td key={key}>{item}</td>
//                                         )
//                                     })}
//                                     <td><DeleteButton/></td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table;
// import React from "react";
// import './Table.css'

// const Table = ({tableTitles, tableData}) => {
//     return (
//         <div className="Table">
//             <table>
//                 <thead>
//                     <tr>
//                         {tableTitles.map((title, key) =>{
//                             return (
//                                 <th key={key}>{title}</th>
//                             )
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                         {tableData.map((values, key) => {
//                             const allValue = () => {
//                                 let elem = [];

//                                 for(let val in values){
//                                     elem.push(values[val]);
//                                 }

//                                 return elem;
//                             }

//                             return(
//                                 <tr key={key}>
//                                     {allValue().map((item, key) => {
//                                         return (
//                                             <td key={key}>{item}</td>
//                                         )
//                                     })}
//                                      <td><DeleteButton/></td>
//                                 </tr>
//                             )
//                         })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table;