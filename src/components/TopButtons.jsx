import React from "react";

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: "London"
        },
        {
            id: 2,
            title: "Sydeny"
        },
        {
            id: 3,
            title: "Tokyo"
        },
        {
            id: 4,
            title: "Paris"
        },
        {
            id: 4,
            title: "Mumbai"
        }]

    return <div className="flex items-center justify-around my-6">
        {cities.map((city) => {
            return <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
        })}

    </div>

}

export default TopButtons;