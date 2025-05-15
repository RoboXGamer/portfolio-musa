import React from 'react'

function Projects() {
    const btn = (img, text) => {
        return (
            <button className="flex items-center gap-1 border border-white/15 rounded-md py-2 px-2">
                <img src={img} className="h-5 w-5" />
                <span className="text-xs text-white/50">{text}</span>
            </button>
        )
    }

    const container = () => {
        return (
            <div className="relative p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all ease-in-out sizeinc-1 ">
                <h4 className="text-xl ">Meaning Khoj</h4>
                <p className="text-sm mt-3 text-white/50">A Chrome extension that helps users quickly find word definitions and translations while browsing.</p>
                <div className="flex flex-wrap gap-2 mt-3 ">
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React")}
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript")}
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", "Chrome Extension")}
                </div>
                <a href='youtube.com'
                 className="absolute top-0 right-0 flex items-center justify-center h-10 w-10 opacity-75 md:opacity-50 hover:opacity-100 ">
                    <img src="/link-32.png" className=" invert h-5 " />
                </a>
            </div>
        )
    }

    return (
        <div className='py-5 font-mono '>
            <h1 className="text-2xl">Projects</h1>
            <p className="text-xs mt-1 text-gray-600">
                Built some cool stuff that actually works fr.
            </p>
            <div className="grid md:grid-cols-2 justify-center gap-5 mt-3 ">
                {container()}
                {container()}
                {container()}
                {container()}
                {container()}
            </div>
        </div>
    )
}

export default Projects