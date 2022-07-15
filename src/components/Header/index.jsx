import { useEffect, useState } from 'react'
import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Himasi from '../../../src/himasi.jpg'
import User from '../../assets/images/User.png'
import Notification from '../../assets/iconly/Notification.svg'
import Trolly from '../../assets/iconly/Trolly.svg'
import Search from '../../assets/iconly/Search.svg'
import { Link } from 'react-router-dom';

const OnMobile = ({ children }) => {
  const mobile = useMediaQuery({ maxWidth: 640 })
  return mobile ? children : null
}
const OnTablet = ({ children }) => {
  const tablet = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  return tablet ? children : null
}

const OnNotebook = ({ children }) => {
  const notebook = useMediaQuery({ minWidth: 641, maxWidth: 1024 })
  return notebook ? children : null
}

const OnAtLeastNotebook = ({ children }) => {
  const notebook = useMediaQuery({ minWidth: 641 })
  return notebook ? children : null
}

const OnDesktop = ({ children }) => {
  const desktop = useMediaQuery({ minWidth: 1024 })
  return desktop ? children : null
}


function Header() {

  return (
    <>
      {/* navigation */}
      <nav className="fixed z-50 fixed top-0 left-0 right-0 h-[85px] flex items-center bg-base-100 shadow-xl shadow-blue-50">
        <div className='container mx-auto'>
          <div className='navbar'>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="lg:hidden">
                  <label for="my-modal-2" class="btn btn-ghost btn-circle">
                    <img src={Search} width='24' />
                  </label>
                </label>

                {/* modal of searching for mobile respnsive */}
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal">
                  <label for="my-modal-2" className='w-full h-screen absolute bg-black opacity-60'></label>
                  <div class="modal-box relative">
                    {/* <label for="my-modal-2" class="col-span-6 btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <div class="grid grid-cols-6 gap-x-2">
                      <input type="text" placeholder="Mau cari apa hari ini?" className="col-span-5 input rounded-full text-center input-bordered w-full" />
                      <a href="#" class="btn btn-circle border-none !bg-gradient"><img src={Search} width='24' /></a>
                    </div>
                  </div>
                </div>
                {/* end of modal of searching for mobile respnsive  */}

              </div >
              <Link to={'/'} className='flex'>
                <img src={Himasi} width='28' className='rounded-lg md:flex hidden' />
                <a className="ml-3 normal-case text-xl font-semibold whitespace-nowrap" > HIMASI STORE</a >
              </Link>
            </div >
            <div className="navbar-center hidden lg:flex" >
              <input type="text" placeholder="Mau cari apa hari ini?" className="input float-left rounded-full text-center input-bordered w-[40rem]" />
              <button className='btn btn-sm btn-circle border-none !bg-gradient relative right-10'><img src={Search} width='16' /></button>
            </div >
            <div className="navbar-end" >
              <button className="btn btn-ghost btn-circle" >
                <img src={Trolly} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={Notification} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={User} width='24' />
              </button >
            </div >
          </div >
        </div >
      </nav >
      {/* end of navigation */}
    </>
  )
}

export default Header;