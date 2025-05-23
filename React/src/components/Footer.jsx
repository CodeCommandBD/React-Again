import React from 'react'

const Footer = () => {

    let mark = 90;
  return (
    <div>

        <div>
        {/* Immediately Invoked */}

            {(() => {

                if(mark>80){
                   return  <h1>pass</h1>
                }else{
                   return <h1>fail</h1>
                }
                
            })()}

            
        </div>
    </div>
  )
}

export default Footer