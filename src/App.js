import React from "react";
import { useState, useEffect } from "react";
import FoodComponent from "./components/FoodComponent";
import MenuData from "./data/MenuData";
import './App.css';
function App() {
  const [foodData,setFoodData] = useState(MenuData);

  const pagination = () =>{
    const foodPerPage = 5 //แสดงรายการอาหาร 7 รายการต่อ 1 หน้า
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log("จำนวนเลขหน้า = ",pages);

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage // [0], [7]
      return MenuData.slice(start,start+foodPerPage)
    })
    return newFood
  }

  useEffect(()=>{
    pagination()
  })

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((data,index)=>{
          return <FoodComponent key={index} {...data} />
        })}
      </div>
    </div>
  );
}

export default App;
