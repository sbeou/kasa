import React, { useState } from "react"

function Collapse({title, text}) {
     const [visible, setVisible] = useState('close')
     const setCollapse = () => {
        setVisible(visible === 'close' ? 'open' : 'close')
     }
     return (
        <div className={`collapse ${visible}`}>
            <button onClick={() => setCollapse()}>{title}</button>
            <div className='text'>
                <div>{text}</div>
            </div>
        </div>
     )

}
export default Collapse