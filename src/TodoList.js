// import React from 'react'
// import { useState } from 'react';
// import "./App.css";

// function TodoList() {
//     const [activity, setActivity] = useState("");
//     const [dataList, setDataList] = useState([]);
//     // const [addButton, setAddButton] = useState(true);

//     const addActivity = () => {
//         // setDataList([...dataList, activity])
//         // console.log(dataList);
//         setDataList((dataList)=>{
//             const updatedList = [...dataList, activity];
//              console.log(updatedList);
//              setActivity('');
//              return updatedList;
//         })
//     }
    
//     const removeData = (i) => {
//         const updatedListData = dataList.filter((elem, id) => {
//             return i!==id;
//         })
//         setDataList(updatedListData);     
//     }

//     const removeAllData = () => {
//         setDataList([]);
//     }
//   return (
//     <>
//         <div className='body-container'>
//             <div className='header'>Todo List</div>
//             <input type="text" placeholder='Add item' value={activity} onChange = {(e)=>{
//                 setActivity(e.target.value)
//             }}/>
//             <button onClick={addActivity}>Add</button>
//             <p className='list-heading'>List Display Here:</p>
//             {dataList !== [] && dataList.map((data, i) => {
//                 return(
//                     <>
//                         <p key = {i}>
//                             <div className='list-data'>{data}</div>
//                             <div className='btn-position'>
//                                 <button onClick={ () => removeData(i)}>remove(-)</button>
//                             </div>
//                         </p>
//                     </>
//                 )
//             })}
//             {dataList.length >=1 && 
//             <button onClick={removeAllData}>Remove All</button>
//             }   
//         </div>
//     </>
//   )
// }

// export default TodoList