// This is to optimize the code for not writing the Products component again and again
import React from 'react'

const Product = () => {
  return (
    <div>
        <div>
            <img src='/images/peproni.png' alt='pizza'/>
            <div className='text-center'>
                <h2 className="text-lg font-bold py-2">Havana Special</h2>
                <span className='bg-gray-200 py-2 rounded-full text-sm px-4'>Small</span>
            </div>
            {/* flex y  grid apply karne ke liye parent container chahiye hota hai hamesha */}
            <div className='flex justify-between mt-4 items-center'>
                <span>$ 500</span>
                <button className='py-1 px-4 bg-yellow-500 rounded-full font-bold'>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default Product