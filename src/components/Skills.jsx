import React from 'react'

function Skills() {
    const div = (img, link) => <a hrefLang={link} className="h-10 w-10 md:w-15 md:h-15 bg-white/10 rounded-xl p-2 hover:bg-white/20 transition-all ease-in-out sizeinc-2 ">{img}</a>


    const li = (title, body) => {
        return (
            <li className="mb-3 ">
                <strong className='text-white/75 md:text-2xl '>{title}</strong>
                <span className='text-white/50 md:text-2xl '>{body}</span>
            </li>
        )
    }

    return (
        <section className='py-5 font-mono '>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 ">Skills & Expertise</h2>
            {/* <p className="text-xs mt-1 text-gray-600">
                Always learning, but these are my go-to tools!
            </p> */}

            <ul className="mt-3 md:mt-5">
                {li('Languages- ', 'JavaScript, Python')}
                {li('Frontend- ', 'React, TailwindCSS, Zustand, Redux-Toolkit, Framer Motion, WebRTC')}
                {li('Backend- ', 'Node, Express, mongoose, JWT, Streams, REST')}
                {li('Database- ', 'MongoDB')}
                {li('Tools- ', 'VS code, Git, Postman')}


            </ul>

            <div className="flex flex-wrap gap-2 md:gap-5 min-w-full mt-10 ">
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" alt="Prisma" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="Yarn" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="Babel" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ESLint" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="Heroku" />, "#")}
                {div(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" />, "#")}
            </div>
        </section>
    )
}

export default Skills;