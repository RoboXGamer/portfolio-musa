import React from 'react'

function Skills() {
    const div = (img, css = '') => <img src={`/tools/${img}`} className={`${css}h-10 w-10 md:w-15 md:h-15 bg-white/10 rounded-xl p-2 hover:bg-white/20 transition-all ease-in-out sizeinc-2 `}></img>


    const li = (title, body) => {
        return (
            <li className="mb-3 ">
                <strong className='text-white/75 md:text-2xl '>{title}</strong>
                <span className='text-white/50 md:text-2xl '>{body}</span>
            </li>
        )
    }

    return (
        <section id='skills' className='py-5  '>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 ">Skills & Expertise</h2>
            {/* <p className="text-xs mt-1 text-gray-600">
                Always learning, but these are my go-to tools!
            </p> */}

            <ul className="mt-3 md:mt-5">
                {li('Languages- ', 'JavaScript')}
                {li('Frontend- ', 'React, TailwindCSS, HTML5, MUI')}
                {li('Backend- ', 'Nodejs, Express, mongoose, JWT, REST')}
                {li('Database- ', 'MongoDB')}
                {li('Tools- ', 'VS code, Git, Postman')}
            </ul>

            <div className="flex flex-wrap gap-2 md:gap-5 min-w-full mt-10 ">
                {div('html5.svg')}
                {div('css.svg')}
                {div('javascript.svg')}
                {div('express-js.svg')}
                {div('mongoose.svg')}
                {div('jwt.svg')}
                {div('mongodb.svg')}
                {div('nodejs.svg')}
                {div('vite.svg')}
                {div('react.svg')}
                {div('tailwind-css.svg')}
                {div('material-ui.svg')}
                {div('vs-code.svg')}
                {div('git.svg')}
                {div('discord.svg')}
            </div>
        </section>
    )
}

export default Skills;