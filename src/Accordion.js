import React, { useState } from 'react';
import {questions} from './api';
import Myaccordion from './Myaccordion';

const Accordion = () => {
    const [data,setData] = useState(questions); // Data has an initial state as questions[]
    return (
        <>
            <section className='main-div'>
                <h1>About Me</h1>
                {data.map((cval) => {
                    return <Myaccordion key={cval.id} {...cval} />; {/* Here, key is the custom attribute having cval.id as the value but {...cval} doesn't have a custom attribute name and is sent directly which is allowed and is collecetd in props*/}
                })}
            </section>
        </>
    );
};

export default Accordion;