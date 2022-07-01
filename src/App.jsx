import { useState } from 'react'
import Image from './assets/iconly/Image.svg'
import Notification from './assets/iconly/Notification.svg'
import Trolly from './assets/iconly/Trolly.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* navigation */}
      <nav className="h-[85px] flex items-center bg-base-100 shadow-xl shadow-blue-50">
        <div className='container mx-auto'>
          <div className='navbar'>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li tabIndex="0">
                    <a className="justify-between">
                      Parent
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </a>
                    <ul className="p-2" >
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul >
                  </li >
                  <li><a>Item 3</a></li>
                </ul >
              </div >
              <a className="btn btn-ghost normal-case text-xl" > HIMASI STORE</a >
            </div >
            <div className="navbar-center hidden lg:flex" >
              <input type="text" placeholder="Type here" className="input rounded-full text-center input-bordered w-[50rem]" />
              {/* <ul className="menu menu-horizontal p-0" >
                <li><a>Item 1</a></li>
                <li tabIndex="0">
                  <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul className="p-2" >
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul >
                </li >
                <li><a>Item 3</a></li>
              </ul > */}
            </div >
            <div className="navbar-end" >
              <button className="btn btn-ghost btn-circle " >
                <img src={Trolly} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={Notification} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={Image} width='24' />
              </button >
            </div >
          </div >
        </div >
      </nav >
      {/* end of navigation */}

      <div className='mt-20 container mx-auto'>

        {/* banner */}
        <div class="carousel rounded-[40px] w-full">
          <div id="slide1" class="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        {/* end of banner */}

        <div className="mt-12 py-14 px-16 flex justify-center h-[85px] rounded-[40px] bg-red-300 flex items-center shadow-xl shadow-blue-50">
          <span className='flex gap-x-4'><img src={Image} /><p>Semua Kategori</p></span>
          <span className='mx-8'><p>|</p></span>
          <span className='flex gap-x-4'><img src={Image} /><p>Software</p></span>
          <span className='mx-8'><p>|</p></span>
          <span className='flex gap-x-4'><img src={Image} /><p>Gadget</p></span>
          <span className='mx-8'><p>|</p></span>
          <span className='flex gap-x-4'><img src={Image} /><p>Pakaian</p></span>
          <span className='mx-8'><p>|</p></span>
          <span className='flex gap-x-4'><img src={Image} /><p>Alat Tulis</p></span>
        </div>
      </div>
    </>
  )
}

export default App
