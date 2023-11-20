import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear

} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
    return <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Clear</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-20" />
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-2">
                
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className= "mr-1"/>
                    Real fell:
                    <span className="font-medium"></span>
                </div>
            
            </div>

        </div>

    </div>
}

export default TemperatureAndDetails;