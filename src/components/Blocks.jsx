import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Components.css"

const Blocks = () => {
  const [blocks, setBlocks] = useState([])

  // Recieve the hash and use it in the url to redirect to the exact block
  const redirect = (hash) => {
    window.location.replace(`https://mempool.space/block/${hash}`)
  }

  useEffect(() => {
    axios.get('https://mempool.space/api/v1/blocks')
    .then((response) => {
      // sort in descending order by when blocks were mined
      const sortedBlocks = response.data.sort()
      // Add the sorted blocks into our blocks state
      setBlocks(sortedBlocks)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div>
      {
        // the .map 'method' lets us iterate through our list of blocks and display each one in it's own container
        blocks.map((block) => {
          return(
            // onClick lets us define an event that will occur when this container is clicked
            <div onClick={() => redirect(block.id)} className='block' key={block.nonce}>
              <h3>Height <br /> {block.height}</h3>
              <hr />
              <p>Size <br /> {block.size} bytes</p>
              <p>Txs <br /> {block.tx_count}</p>
              <p>Avg fee <br /> {block.extras.avgFee}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default Blocks;