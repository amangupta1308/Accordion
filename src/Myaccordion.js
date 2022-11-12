import React, { useState } from 'react';
import {questions} from './api';

const Myaccordion = ({id,question,answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>  
            <div className='container'>
                <div className='main-heading'>
                    <p onClick={() => setShow(!show)} className="para">{show ? "➖" : "➕"}</p> {/*We can't directly do onClick={setShow(!show)} becoz then it will be an infinite loop*/}
                    <h3 className='sub-heading'>{question}</h3>
                </div>
                {show && <p className='answers'>{answer}</p>}  {/* p will always be true but depending on show, it will be displayed*/}
            </div>
            </>
    );
};

export default Myaccordion;