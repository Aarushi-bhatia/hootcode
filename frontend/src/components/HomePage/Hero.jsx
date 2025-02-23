import React from 'react'

const Hero = () => {
  return (
    <>
    
    <div className='h-[100vh] items-center justify-center dark:bg-grid-white/[0.1] bg-dot-[#0B1120]/[0.2] relative max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-28'>
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0B1120] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
    <div className='flex gap-6 relative '>
      <div>
      <h1 className='text-slate-900 z-auto font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight  dark:text-white'>Code smarter, not harder with AI by your side.</h1>
    <p className='mt-6 text-lg text-slate-600 max-w-3xl mx-auto dark:text-slate-400'>A dynamic platform offering AI guidance, Code Review, and interactive learning path—revolutionizing how you master coding with confidence.</p>

      </div>
      <img src="/codelaptop.png" className='h-80 w-auto shadow-2xl' alt="" />
    </div>
    
    <div className=''>
    
    
    </div>
    </div>
    </>
  )
}
export default Hero