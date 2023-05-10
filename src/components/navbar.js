import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Alert from '@mui/material/Alert';
import React, {Component} from "react"



/**
    Navbar Class -> Attention to Material UI being used
**/
class Navbar extends Component
{
  /**
    Function that will detect when the location is written and after that pressed the Enter key.
    Then it call the callback function that will later call "searchresult" (in app.js) sending the "event.target.value" (location) as a prop.
  **/
  verifyenter = (event) =>
  {
    if(event.key === "Enter")
    {
      this.props.callback(event.target.value)
    }
  }

  // The render() method is responsible for rendering the HTML markup or other elements that make up the user interface of a React component. 
  render()

    /**
      Navbar UI structure divided in 4 main blocks:
        title + icon
        city
        alert

      "title" component is instanced and corresponds to the title or main logo "Best Weather".
      "city" component is instanced and is the desired location to know its weather (p.e: Porto).
      "alert" component is instanced and is a info alert that helps the user to interact with the app.

      small attention to onKeyPress an event that verifies the keys pressed when writing the location. the keys are verified in the above arrow function "verifyenter"
  **/
  {
    return (
      <div className="search">

        <h1 className="title">
          <WbSunnyIcon></WbSunnyIcon>
          Best Weather
        </h1>

        <input
          id="city"
          onKeyPress={this.verifyenter}
          type='text'
          placeholder='Enter desired location'>
        </input>

        <Alert className='alert' severity="info">
          Insert a location. Don't forget to press enter!
        </Alert>

      </div>
    )
  }
}

export default Navbar