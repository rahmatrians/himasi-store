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
              <input type="text" placeholder="Mau cari apa hari ini?" className="input rounded-full text-center input-bordered w-[50rem]" />
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
              <button className="btn btn-ghost btn-circle" >
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

      <section className='md:mt-20 mt-10'>
        <div className='container mx-auto'>
          {/* banner */}
          <div class="carousel md:rounded-[40px] rounded-lg md:h-96 h-40">
            <div id="slide1" class="carousel-item relative w-full md:overflow-hidden">
              <img src="https://placeimg.com/800/400/arch" class="w-screen md:h-fit" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn bg-white btn-circle text-gray-900">❮</a>
                <a href="#slide2" class="btn bg-white btn-circle text-gray-900">❯</a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full md:overflow-hidden">
              <img src="https://placeimg.com/800/400/arch" class="w-screen md:h-fit" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn bg-white btn-circle text-gray-900">❮</a>
                <a href="#slide3" class="btn bg-white btn-circle text-gray-900">❯</a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full md:overflow-hidden">
              <img src="https://placeimg.com/800/400/arch" class="w-screen md:h-fit" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn bg-white btn-circle text-gray-900">❮</a>
                <a href="#slide4" class="btn bg-white btn-circle text-gray-900">❯</a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full md:overflow-hidden">
              <img src="https://placeimg.com/800/400/arch" class="w-screen md:h-fit" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn bg-white btn-circle text-gray-900">❮</a>
                <a href="#slide1" class="btn bg-white btn-circle text-gray-900">❯</a>
              </div>
            </div>
          </div>
          {/* end of banner */}

          {/* category shortcut */}
          <div className="mt-12 py-14 px-16 flex justify-center h-[85px] rounded-[40px] whitespace-nowrap md:gap-x-10 items-center shadow-xl shadow-blue-50">
            <a href='' className='flex gap-x-4 hover:bg-hover py-1 px-6 place-content-center'><img src={Image} /><p className='font-Inter md:md-title1 title1 text-secColor'>Semua Kategori</p></a>
            <a><p className='text-secColor'>|</p></a>
            <a href='' className='flex gap-x-4 hover:bg-hover hover:mb-2 py-1 px-6 place-content-center'><img src={Image} /><p className='font-Inter md:md-title1 title1 text-secColor'>Software</p></a>
            <a><p className='text-secColor'>|</p></a>
            <a href='' className='flex gap-x-4 hover:bg-hover hover:mb-2 py-1 px-6 place-content-center'><img src={Image} /><p className='font-Inter md:md-title1 title1 text-secColor'>Gadget</p></a>
            <a><p className='text-secColor'>|</p></a>
            <a href='' className='flex gap-x-4 hover:bg-hover hover:mb-2 py-1 px-6 place-content-center'><img src={Image} /><p className='font-Inter md:md-title1 title1 text-secColor'>Pakaian</p></a>
            <a><p className='text-secColor'>|</p></a>
            <a href='' className='flex gap-x-4 hover:bg-hover hover:mb-2 py-1 px-6 place-content-center'><img src={Image} /><p className='font-Inter md:md-title1 title1 text-secColor'>Alat Tulis</p></a>
          </div>
          {/* end of category shortcut */}
        </div>
      </section>

      <section className='md:mt-20 mt-10 bg-[#f5f5f5]'>
        <div className='container flex flex-row md:py-[180px] mx-auto'>
          <div className='md:basis-5/12 basis-4/12'>
            <p className='md:md-header1 mb-2'>Flash Deal</p>
            <p className='font-reguler text-[28px] mb-2'>Berakhir Dalam</p>
            <p className='md:md-header1 mb-2'>01 : 44 : 07</p>
          </div>
          <div className='md:basis-7/12 basis-8/12'>
            <div class="card p-4 pb-6 rounded-[30px] w-[300px] bg-base-100 shadow-xl shadow-blue-100">
              <figure class="">
                <img src="https://placeimg.com/400/400/arch" alt="Shoes" class="rounded-2xl" />
                <div class="absolute flex justify-between right-8 top-8">
                  <span className='bg-white rounded-full shadow-md  p-3'>OO</span>
                </div>
              </figure>
              <div class="mt-6 grid gap-y-2">
                <p class="md-paragraph1 text-secColor">Blackmores Multivitamins + Minerals</p>
                <span>
                  <p class="md-subTitle1 text-secColor">Rp17.000</p>
                  <span className='flex gap-x-2'>
                    <p class="md-label1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                    <p class="px-2 py-1 rounded-md bg-[#FFDBE2] md-label2 text-[#F94D6B]">50%</p>
                  </span>
                </span>
                <span className='flex gap-x-2'>
                  <p class="md-label1 text-secColor opacity-[.55]">4.8</p>
                  <p class="md-label1 text-secColor opacity-[.55]">|</p>
                  <p class="md-label1 text-secColor opacity-[.55]">Terjual 680 kali</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App