import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Components.css"

const BlockPrice = () => {
  const [blocks, setBlocks] = useState([])

  const formatTime = (timestamp) => {
    const date = new Date(timestamp*1000)
    const minutesToMine = date.getMinutes()
    
    return minutesToMine
  }

  const redirect = (hash) => {
    window.location.replace(`https://mempool.space/block/${hash}`)
  }

  useEffect(() => {
    axios.get('https://mempool.space/api/v1/blocks')
    .then((response) => {
      console.log(response.data)
      setBlocks(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div>
      {
        blocks.map((block) => {
          const time = formatTime(block.timestamp)
          return(
            <div onClick={() => redirect(block.id)} className='block' key={block.nonce}>
              <h4>height: {block.height}</h4>
              <p>size: {block.size} bytes</p>
              <p>number of txs: {block.tx_count}</p>
              <p>mined {time} minutes ago</p>
              <p>Average fee: {block.extras.avgFee}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default BlockPrice;