import React from 'react'

function Hero() {
    return (
        <header id='more' className='flex flex-col w-full py-5 '>
            <h3 className="text-2xl md:text-4xl text-blue-600 font-bold mt-5  ">Hey there :D</h3>
            <p className="text-sm md:text-xl mt-3 text-white/50  ">
                <span className="inline ">
                    Musa here! Once a NEET aspirant, (or... maybe a NEET failure, lol)&nbsp;
                </span>
                I accidentally fell in love with computers—and now there's no turning back.&nbsp;
                <strong className="inline px-1 bg-blue-600/50 ">
                    I started from scratch with no roadmap, no mentor—just vibes, caffeine, and curiosity.
                </strong>
                &nbsp;If you’ve somehow ended up here…
                <span className='text-md text-blue-600 font-semibold '>&nbsp; :P ありがとう</span>
            </p>
            <img src='https://count.getloli.com/@Misa-De-Codes' className="md:hidden mt-10 md:my-30 w-full cursor-none select-none" />
        </header>
    )
}

export default Hero