import React, { useState } from "react"

function Collapse({title, text}) {
     const [visible, setVisible] = useState('open')
     const setCollapse = () => {
        setVisible(visible === 'open' ? 'close' : 'open')
     }
     return (
        <div className={`collapse ${visible}`}>
            <button onClick={() => setCollapse()}>{title}</button>
            <div className='text'>
                {text}
            </div>
        </div>
     )

}
export default Collapse