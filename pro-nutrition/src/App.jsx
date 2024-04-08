import './App.css'
import FoodBox from './Components/FoodBox';
import Search from './Components/Search';
import { useState } from 'react';

import FoodData from './resources/FoodData';
console.log('FoodData :', FoodData);

function App() {

  const [search, setSearch] = useState("");

  return(
    <>
      <h1>PRO NUTRITION</h1>
      <Search setSearch={setSearch}/>
      {FoodData.filter((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase())
      }).map((e,i)=>{
        return <FoodBox data={e} index={i} key={i}/>
      })}
    </>
  )
}

export default App;