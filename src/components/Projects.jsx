import React from 'react'

function Projects() {
    const btn = (img, text) => {
        return (
            <button className="flex items-center gap-1 border border-white/15 rounded-md py-2 px-2">
                <img src={img} className="h-5 w-5" />
                <h4 className="text-xs text-white/50">{text}</h4>
            </button>
        )
    }

    const container = (title, discription, link) => {
        return (
            <div className="relative p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all ease-in-out sizeinc-1 ">
                <h3 className="text-xl md:text-2xl">{title}</h3>
                <h5 className="text-sm mt-3 text-white/50">{discription}</h5>
                <div className="flex flex-wrap gap-2 mt-3 ">
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React")}
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript")}
                    {btn("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", "Chrome Extension")}
                </div>
                <a href={link}
                 className="absolute top-0 right-0 flex items-center justify-center h-10 w-10 opacity-75 md:opacity-50 hover:opacity-100 ">
                    <img src='/images/link-32.png' className="invert h-5 " />
                </a>
            </div>
        )
    }

    return (
        <section className='py-5 font-mono '>
            <h2 className="text-2xl md:text-4xl font-semibold ">Projects</h2>
            <h3 className="text-xs md:text-xl md:mt-3 mt-1 text-gray-600">
                Built some cool stuff that actually works fr.
            </h3>
            <div className="grid md:grid-cols-2 md:mt-10 justify-center gap-5 mt-3 ">
                {container('Employ Directory System','RESTful backend for an Employee Directory System with authentication, role-based access, employee management, search, filtering, and data export. Built using Node.js, Express.js, and MongoDB.' ,'https://github.com/Misa-De-Codes/Employee-Directory.git')}
                {container('Tab Screen Time Recorder', '"Learn how Web Extensions are built from scratch with this beginner-friendly project. This basic app will guide you step by step, ensuring you grasp the fundamentals and gain hands-on experience. A perfect starting point to master Web Extensions!"', 'https://github.com/Misa-De-Codes/Web-Extension-Learning.git')}
                {/* {container()}
                {container()}
                {container()} */}
            </div>
        </section>
    )
}

export default Projects