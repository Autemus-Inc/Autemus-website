import React, { useState, useRef } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri"

const faqs = [
    {
      id: 1,
      header: "What services does Autemus offer?",
      text: "Autemus offers a range of services, including web development, mobile development, DevOps and cloud services, as well as technical consultation."
    },
    {
        id: 2,
        header: "Can Autemus handle both small and large-scale projects?",
        text: "Yes, Autemus is equipped to work on projects of various sizes, from small startups to large enterprises."
    },
    {
        id: 3,
        header: "What industries does Autemus serve?",
        text: "Autemus serves a diverse clientele across various industries, including healthcare, finance, e-commerce, and more."
    },
    {
        id: 4,
        header: "Do you provide ongoing support and maintenance after project completion?",
        text: "Yes, Autemus offers post-launch support and maintenance services to ensure the continued success of your projects."
    },
    {
      id: 5,
      header: "Is Autemus experienced in working with cutting-edge technologies and frameworks?",
      text: "Absolutely! Autemus keeps up with the latest industry trends and technologies to deliver modern and innovative solutions for clients."
  }
]

const Accordion = () => {
    const contentEls = faqs.map(() => useRef()); 
    const [activeItems, setActiveItems] = useState({}); 

    const handleToggle = (index) => {
        setActiveItems((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    }

    return (
        <>
        {faqs.map((info, index) => (
            <div className="accordion-card" key={info.id}>
                <div  className={`accordion-toggle p-3 ${activeItems[info.id] ? 'active' : ''}`} onClick={() => handleToggle(info.id)}>
                        <h5 className="accordion-title">{info.header}</h5>
                        <RiArrowDropDownFill className='accordion-icon' />
                </div>
                <div ref={contentEls[index]} className={`collapse ${activeItems[info.id] ? 'show' : ''}`} style={
                    activeItems[info.id]
                        ? { height: contentEls[index].current.scrollHeight + 'px' }
                        : { height: "0" }
                }>
                    <div className="accordion-body">
                        <p className='mb-0'>{info.text}</p>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default Accordion;