import React from 'react'

function Projects() {
    const button = (img, text) => {
        return (
            <button className="flex items-center gap-1 border border-white/15 rounded-md py-2 px-2">
                <img src={img} className="h-5 w-5" />
                <h4 className="text-xs text-white/50">{text}</h4>
            </button>
        )
    }

    const container = (title, discription, link, btn) => {
        return (
            <div className="relative p-7 bg-white/5 border border-blue-600/50 rounded-2xl hover:bg-blue-600/15 transition-all ease-in-out sizeinc-1 ">
                <h3 className="text-xl md:text-2xl">{title}</h3>
                <h5 className="text-sm mt-3 text-white/50">{discription}</h5>
                <div className="flex flex-wrap gap-2 mt-3 ">
                    {button(btn, "React")}
                    {button(btn, "JavaScript")}
                    {button(btn, "Chrome Extension")}
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
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">Projects</h2>
            <h3 className="text-xs md:text-xl md:mt-3 mt-1 text-gray-600">
                Built some cool stuff that actually works fr.
            </h3>
            <div className="grid md:grid-cols-2 md:mt-10 justify-center gap-5 mt-3 ">
                {container('Employ Directory System', 'RESTful backend for an Employee Directory System with authentication, role-based access, employee management, search, filtering, and data export. Built using Node.js, Express.js, and MongoDB.', 'https://github.com/Misa-De-Codes/Employee-Directory.git')}
                {container('Tab Screen Time Recorder', '"Learn how Web Extensions are built from scratch with this beginner-friendly project. This basic app will guide you step by step, ensuring you grasp the fundamentals and gain hands-on experience. A perfect starting point to master Web Extensions!"', 'https://github.com/Misa-De-Codes/Web-Extension-Learning.git')}
                {/* {container()}
                {container()}
                {container()} */}
            </div>
            <section className=" ">
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
            </section>
        </section>
    )
}

export default Projects