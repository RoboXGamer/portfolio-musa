import React, { useState } from 'react'


function Bot({ setIsVisible }) {
  const [isOpened, setIsOpened] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(isClicked => !isClicked)
    setIsVisible(isVisible => !isVisible)
  }

  const buffer = '492077616e742061206769726c20696e206d79206c6966652c2077686f20686173207468652073616d65206c6576656c206f6620636861726d20617320416e696d65206769726c7321'
  const message = 'I want a girl in my life, who has the same level of charm as Anime girls!'


  const card = (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 m-auto flex flex-col h-fit p-15 max-w-[440px] md:max-w-[512px] ">
      <div className="fixed top-0 left-0 min-h-full min-w-full z-10 bg-black/75 blur-2xl  "></div>

      <div className="p-1 z-20 border bg-black border-white/30 rounded-2xl ">
        <div className=" bg-black opacity-75 p-5 z-30 border border-white/30 rounded-2xl  ">
          <div className='text-wrap '>
            <h3 className='text-xl md:text-4xl '>I'm Susie and this is Musa's secret!</h3>
            <h5 className='break-all text-[8px] md:text-xs mt-1 md:mt-3 '>{isClicked ? message : buffer}</h5>
          </div>
          <button
            onClick={() => handleClick()}
            className="mt-3 md:mt-5 p-2 text-sm font-semibold border border-red-500 text-red-500 md:text-white md:border-white/30 rounded-xl transition-all ease-in-out hover:border-red-500 hover:text-red-500 ">Decode it?</button>
        </div>
      </div>
    </div>

  )

  return (
    <div className='fixed flex items-center justify-center left-5 bottom-5 h-10 w-10 md:h-15 md:w-15 z-50 rounded-full overflow-hidden bg-black border-2 border-blue-600 shadow-2xl font-mono '
      onClick={() => setIsOpened(isOpened => !isOpened)}
    >
      <img src="/images/bot.webp" />
      {isOpened && card}
    </div>
  )
}

export default Bot