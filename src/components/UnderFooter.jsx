import React from 'react'
import HiddenHero from './HiddenHero.jsx'


function UnderFooter() {

    const card = (message) => {
        return (
            <div className="flex flex-col items-center justify-center mt-5 ">
                <h1 className=''>{message}</h1>
            </div>
        )
    }

    return (
        <div>
            {card("Hi I'm Sushi!")}
            <HiddenHero />
        </div>
    )
}

export default UnderFooter