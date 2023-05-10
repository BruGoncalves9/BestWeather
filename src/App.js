import './App.css';
import React from 'react';
import {useState } from 'react';
import axios from "axios";
import Navbar from "./components/navbar"
import {Weather,Statistics} from './components/weather_block';

/**
    Main Function
**/
function App()
{
  // declaration of a const containing the API_Key
  const API_KEY = "8a2bd5279e895eff6458ad4cdae99bd4"
  // declaration of a variable that will retain the information gathered on the weather API
  const [data,set_data] = useState({})

  /** 
    Function that will be executed after the callback function is performed.
    It will receive the new_location parameter that will be inserted alongside the API_KEY to fetch the weather information
  **/
  const searchresult = (new_location) =>
  {
    // Axios is a library for node.js that suports promise-based API. It makes XMLHttpRequests from the browser and http requests from node.js.
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${new_location}&appid=${API_KEY}&units=metric`).then((response) => 
    {
      // stores the response in "data" previously declared
      set_data(response.data)
      // a log for debugging
      console.log(response.data)
    })
  }

  /**
      Main UI structure divided in 3 main blocks:
        Navbar        (from navbar.js)
        Weather       (from weather_block.js)
        Statistics    (from weather_block.js)

      "Navbar" component is instanced and passes it a prop called "callback" with the value of "searchresult" (an arrow function or lambda function).
      "Weather" component is instanced (if data.name (location) is defined) and passes it multiples props: name, sys, main and weather.
      "Statistics" component is instanced (if data.name (location) is defined) and passes it multiples props: sys, main and wind.
  **/
  return (
    <div className="app">
        <div className='container'>
          
          <Navbar callback={searchresult}></Navbar>

          {
            data.name != undefined && <Weather
              name={data.name}
              sys={data.sys || null}
              main={data.main || null}
              weather={data.weather || null}
            >
            </Weather>
          }

          {
            data.name != undefined &&
            <Statistics
              sys={data.sys || null}
              main={data.main || null}
              wind={data.wind || null}
            >
            </Statistics>
          }
        </div>
    </div>
  );
}

export default App;