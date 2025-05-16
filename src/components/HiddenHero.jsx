import React from "react"

function Hero() {
    const a = (text = '') => <a href="" className="px-3 md:px-5 py-1 md:py-2 border border-blue-600/50 rounded-2xl hover:bg-blue-600/25 transition-all ease-in-out sizeinc-1 ">{text}</a>
    const li = (text = '') => <li className="mb-3 text-white/50 md:text-2xl">{text}</li>

    return (
        <div className="flex w-full min-h-screen items-center pt-5">
            <div className='flex flex-col w-full gap-5 pt-5 font-mono '>

                <h1 className="text-4xl font-black md:text-6xl text-blue-600 ">Musa-De-Codes</h1>
                <div className="flex w-full gap-2 md:gap-5 ">
                    {a('Skills')}
                    {a('Projoects')}
                    {a('More')}
                </div>
                <ul className="list-inside list-decimal ">
                    {li('A self-taught developer who loves to learn new things.')}
                    {li('Currently pursuing a degree in Computer Science.')}
                    {li('Building tools that works somehow.')}
                    {li('Sometimes I make websites with pure HTML  :D')}
                    {li('I love Sushi!')}
                </ul>
                <div className="flex justify-center min-w-full  ">
                    <img src="./images/shigure.gif" />
                </div>
            </div>
        </div>
    )
}

export default Hero;