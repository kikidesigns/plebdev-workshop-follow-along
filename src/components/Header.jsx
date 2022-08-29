import "./Components.css"
import React, {useState} from "react"
import axios from "axios"

// functions preform logic and return something
// In react we are usually returning 'markup'
const Header = () => {
  const [price, setPrice] = useState('')
  axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
    .then((response) => {
      setPrice(response.data.data.amount)
  })
    .catch((error) => {
    console.log(error)
  })
  return (
    <div className='header'>
      <h3>Bitcoin price</h3>
      <h2>${price}</h2>
    </div>
  )
}

export default Header;