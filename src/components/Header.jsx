import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Components.css"

// functions preform logic and return something
// In react we are usually returning 'markup' which is just fancy HTML
// functions that return markup are called 'components'
const Header = () => {
  // useState lets us store/update data inside of this component
  // Though this data will be lost on a refresh since we dont have a database
  const [price, setPrice] = useState('')
  // useEffect is a 'hook' or special function that will run code based on a trigger
  // On line 21 the brackets hold the trigger
  // Since it is empty [] that means this code will run every time the page is refreshed
  useEffect(() => {
    axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      // .then -> the API call was successful
      .then((response) => {
        setPrice(response.data.data.amount)
    })
      // .catch -> the API call failed and threw us an error
      .catch((error) => {
      // console.log lets us print something from inside our app into the web browser console
      console.log(error)
    })
  }, [])
  
  return (
    <div className='header'>
      <h3>Bitcoin price</h3>
      <h2>${price}</h2>
    </div>
  )
}

// We need to export our components so they are available for us to grab and return in the app
export default Header;