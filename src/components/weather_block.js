import React, {Component} from "react"
import Clear_Sky from "./images/clear_sky.png"
import Few_Clouds from "./images/few_clouds.png"
import Overcast_Clouds from "./images/overcast_clouds.png"
import Scattered_Clouds from "./images/scattered_clouds.png"
import Light_Rain from "./images/light_rain.png"
import Heavy_Rain from "./images/heavy_rain.png"
import Mist from "./images/mist.png"
import Snow from "./images/snow.png"
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WindIcon from '@mui/icons-material/WindPower';
import SunIcon from '@mui/icons-material/WbTwilight';
import HumidityIcon from '@mui/icons-material/WaterDrop';
import PressureIcon from '@mui/icons-material/Cyclone';



/**
    Weather Class
**/
export class Weather extends Component
{
  // Elaboration of a state constructor in order to define the image source according to the data received
  constructor(props)
  {
      super(props)
      // declaration of a local variable "image_source"
      let image_source
  
      // multiple verifications of weather "description" to display the correct image representation.
      // images are stored in "images" folder
      if(this.props.weather[0].description==="clear sky")
      {
        image_source = Clear_Sky
      }
  
      if(this.props.weather[0].description==="few clouds")
      {
        image_source = Few_Clouds
      }
  
      if(this.props.weather[0].description==="overcast clouds")
      {
        image_source = Overcast_Clouds
      }
  
      if(this.props.weather[0].description==="scattered clouds")
      {
        image_source = Scattered_Clouds
      }
  
      if(this.props.weather[0].description==="light rain")
      {
        image_source = Light_Rain
      }

      if(this.props.weather[0].description==="moderate rain")
      {
        image_source = Heavy_Rain
      }
  
      if(this.props.weather[0].description==="shower rain")
      {
        image_source = Heavy_Rain
      }
  
      if(this.props.weather[0].description==="mist")
      {
        image_source = Mist
      }
  
      if(this.props.weather[0].description==="snow")
      {
        image_source = Snow
      }

      // after all verifications, it will set the correct image source to "imageURL"
      this.state = {
          imageURL: image_source
      }
  }

  // The render() method is responsible for rendering the HTML markup or other elements that make up the user interface of a React component. 
  render()

  /**
      Weather UI structure divided in 4 main blocks:
        location
        temperature
        description
        currentimage

      "location" component is instanced and corresponds to the location and its country (p.e: Porto, PT).
      "temperature" component is instanced and is the current temperature read (p.e: 20ºC).
      "description" component is instanced and interacts with the weather condition and its brief description (p.e: Clouds, few clouds).
      "currentimage" component is instanced and is a graphical representation of the current weather condition (p.e: few_clouds.png).
  **/
  {
    return (
      <div className='middle'>

        <div className='current'>

          <div className='location'>
              <p> {this.props.name},</p>
              <p> {this.props.sys.country}</p>
          </div>

          <div className='temperature'>
              <h1 className='bold'> {Math.round(this.props.main.temp)}ºC </h1>
          </div>

          <div className='description'>
              <p> {this.props.weather[0].main}, {this.props.weather[0].description}</p>
          </div>
        </div>

        <div className='currentimage'>
          <img className='image' src = {this.state.imageURL} alt="">
          </img>
        </div>
      </div>
    )
  }
}



/**
    Statistics Class -> Attention to Material UI being used
**/
export class Statistics extends Component
{
  // Arrow function responsible for converting the Unix date into a readable one in UTC timezone (small compensation of 1 hour to be the same timezone as Portugal's)
  // Return a substring with only containing the "HH:mm" of the sunrise and/or sunset
  epoch_converter = (date) => {
    let myDate = new Date((date+3600)*1000)
    myDate = myDate.toUTCString()
    return myDate.slice(17,22)
  }

  // The render() method is responsible for rendering the HTML markup or other elements that make up the user interface of a React component. 
  render()

  /**
      Statistics UI structure divided in 6 main grid-itens:
        feels + icon (thermostat)
        humidity + icon (humidity)
        wind + icon (wind)
        pressure + icon (pressure)
        sunrise + icon (sun)
        sunset + icon (sun)

      "feels" component is instanced and is the feels like temperature (p.e: 20ºC).
      "humidity" component is instanced and is the current humidity in air (p.e: 80%).
      "wind" component is instanced and represents the wind speed (p.e: 2 Km/h).
      "pressure" component is instanced and defines the atmospheric pressure (p.e: 1024 mbar).
      "sunrise" component is instanced and defines the sunrise time of the day (p.e: 06:30).
      "sunset" component is instanced and defines the sunset time of the day (p.e: 20:40).
  **/
  {
    return (
      <div className='bottom'>
        <div className='grid-container'>

        <div className='grid-item feels'>
          <p className='bold'> <ThermostatIcon></ThermostatIcon> {Math.round(this.props.main.feels_like)}ºC </p>
          <p> Feels Like </p>
        </div>

        <div className='grid-item humidity'>
          <p className='bold'> <HumidityIcon></HumidityIcon> {this.props.main.humidity}% </p>
          <p> Humidity </p>
        </div>

        <div className='grid-item wind'>
          <p className='bold'> <WindIcon></WindIcon> {Math.round(this.props.wind.speed)} Km/h </p>
          <p> Wind Speed </p>
        </div>

        <div className='grid-item pressure'>
          <p className='bold'> <PressureIcon></PressureIcon> {this.props.main.pressure} mbar </p>
          <p> Pressure </p>
        </div>

        <div className='grid-item sunrise'>
          <p className='bold'> <SunIcon></SunIcon> {this.epoch_converter(this.props.sys.sunrise)} </p>
          <p> Sunrise </p>
        </div>

        <div className='grid-item sunset'>
          <p className='bold'> <SunIcon></SunIcon> {this.epoch_converter(this.props.sys.sunset)} </p>
          <p> Sunset </p>
        </div>

      </div>
    </div>  
    )
  }
}