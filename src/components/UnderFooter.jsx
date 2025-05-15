import React from 'react'

function UnderFooter() {

    const card = (message) => {
        return (
            <div className="">
                {message}
            </div>
        )
    }

    return (
        <div>
            {card("Hi I'm Sushi!")}
        </div>
    )
}

export default UnderFooter