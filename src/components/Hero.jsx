import React from "react"

function Hero() {
    const btn = (text = '') => <a href="" className="px-3 py-1 border border-white/30 rounded-2xl hover:bg-white/25 transition-all ease-in-out sizeinc-1 ">{text}</a>
    const li = (text = '') => <li className="mb-3 text-white/50 md:text-2xl">{text}</li>
    const span = (text = '') => <span className="px-2 bg-white/15 rounded-xl ">{text}</span>

    return (
        <div className="flex w-full min-h-screen items-center py-5">
            <div className='flex flex-col w-full gap-5 py-5 font-mono '>
                <h1 className="text-4xl font-black md:text-5xl ">Musa-De-Codes</h1>
                <div className="flex gap-2 ">
                    {span('19yo')}
                    {span('self-taught')}
                    {span('student')}
                </div>
                <ul className="list-inside list-decimal ">
                    {li('A self-taught developer who loves to learn new things.')}
                    {li('Currently pursuing a degree in Computer Science.')}
                    {li('Building tools that works somehow.')}
                    {li('Sometimes I make websites with pure HTML  :D')}
                    {li('I love Sushi!')}
                </ul>
                <div className="flex w-full gap-2 ">
                    {btn('Skills')}
                    {btn('Projoects')}
                    {btn('More')}
                </div>
            </div>
        </div>
    )
}

export default Hero;