import React, { useState } from 'react';
import './Split.css';
import old from './old f1.jpg';
import nw from './new f1.jpg';

function Split() {
    const [hoveredSide, setHoveredSide] = useState(null);

    return (
        <section className="container">
            <div className="header-f1">
                <h2>Racing The Light</h2>
                <p>Exploring the evolution of F1 racing</p>
            </div>
            
            <div className="split-wrapper">
                <div 
                    className={`left-split ${hoveredSide === 'left' ? 'expanded' : ''} ${hoveredSide === 'right' ? 'collapsed' : ''}`}
                    onMouseEnter={() => setHoveredSide('left')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <img src={nw} alt="Modern F1 car" />
                    <h3>One Time For The Present</h3>
                </div>
                
                <div 
                    className={`right-split ${hoveredSide === 'right' ? 'expanded' : ''} ${hoveredSide === 'left' ? 'collapsed' : ''}`}
                    onMouseEnter={() => setHoveredSide('right')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <img src={old} alt="Classic F1 car" />
                    <h3>Two Times For The Past</h3>
                </div>
            </div>
        </section>
    );
}

export default Split;