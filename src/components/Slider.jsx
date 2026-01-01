import React from 'react';
import sliderfirst from '../assets/slider1.jpg';
import slidersecond from '../assets/slider2.jpg';
import sliderthird from '../assets/slider3.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[400px]">
                <div id="item1" className="carousel-item w-full ">
                    <img
                    src={sliderfirst}
                    className="w-full object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                    src={slidersecond}
                    className="w-full object-cover" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                    src={sliderthird}
                    className="w-full object-cover" />
                </div>
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="h-2 w-2 rounded-full bg-gray-400"></a>
            <a href="#item2" className="h-2 w-2 rounded-full bg-gray-400"></a>
            <a href="#item3" className="h-2 w-2 rounded-full bg-gray-400"></a>
            </div>
        </div>
    );
};

export default Slider;