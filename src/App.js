import React from "react";
import { useState, useEffect } from "react";
import FoodComponent from "./components/FoodComponent";
import MenuData from "./data/MenuData";
import './App.css';
function App() {
  const [foodData,setFoodData] = useState(MenuData);
  const [dataInPage,setDataInPage] = useState([]);
  const [page,setPage] = useState(0);

  const pagination = () =>{
    const foodPerPage = 3 //แสดงรายการอาหาร 7 รายการต่อ 1 หน้า
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log("จำนวนเลขหน้า = ",pages);

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage // [0], [7]
      return MenuData.slice(start,start+foodPerPage)
    })
    return newFood
  }

  const handlePage = (index) =>{
     setPage(index)
  }

  useEffect(()=>{
    const paginate = pagination()
    setDataInPage(paginate)
    setFoodData(paginate[page])
  },[page])

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((data,index)=>{
          return <FoodComponent key={index} {...data} />
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data,index)=>{
          return (
            <button 
            className={`page-btn ${index === page ? "active-btn" : null}`} 
            key={index} 
            onClick={()=>handlePage(index)}>
            {index+1}</button>
          )
        })

        }
      </div>
    </div>
  );
}

export default App;
