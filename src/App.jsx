import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Card from './components/Card/Index'

import Image from './assets/iconly/Image.svg'
import Notification from './assets/iconly/Notification.svg'
import Trolly from './assets/iconly/Trolly.svg'
import Search from './assets/iconly/Search.svg'
import LongArrowRight from './assets/own-icons/Long-Arrow-Right.svg'
import List from './assets/own-icons/List.svg'

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


function App() {
  const [count, setCount] = useState(0);
  let x = [5, 5, 5, 5];
  let y = [2, 2, 2, 2, 2, 2, 2, 2, 2];

  // const layout = layoutGenerator({
  //   sm: 640,
  //   md: 768,
  //   endHalfLg: 800,
  //   lg: 1024,
  // });
  // const OnMobile = layout.isAtMost('sm');
  // const OnMostTablet = layout.isAtMost('md');
  // const OnTablet = layout.isAtLeast('md');
  // const OnHalfDesktop = layout.isAtLeast('endHalfLg');
  // const OnDesktop = layout.isAtLeast('lg');


  return (
    <>
      {/* navigation */}
      <nav className="relative z-50 fixed top-0 left-0 right-0 h-[85px] flex items-center bg-base-100 shadow-xl shadow-blue-50">
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
                      <a href="#" class="btn btn-circle "><img src={Search} width='24' /></a>
                    </div>
                  </div>
                </div>
                {/* end of modal of searching for mobile respnsive  */}

              </div >
              <a className="btn btn-ghost normal-case text-xl" > HIMASI STORE</a >
            </div >
            <div className="navbar-center hidden lg:flex" >
              <input type="text" placeholder="Mau cari apa hari ini?" className="input rounded-full text-center input-bordered w-[40rem]" />
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
          <div className='mx-4 md:mx-0'>
            {/* banner */}
            <div className="carousel md:rounded-[40px] rounded-lg md:h-96 h-40">
              <div id="slide1" className="carousel-item relative w-full md:overflow-hidden">
                <img src="https://placeimg.com/800/400/arch" className="w-screen md:h-fit" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn bg-white btn-circle text-gray-900">❮</a>
                  <a href="#slide2" className="btn bg-white btn-circle text-gray-900">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full md:overflow-hidden">
                <img src="https://placeimg.com/800/400/arch" className="w-screen md:h-fit" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn bg-white btn-circle text-gray-900">❮</a>
                  <a href="#slide3" className="btn bg-white btn-circle text-gray-900">❯</a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full md:overflow-hidden">
                <img src="https://placeimg.com/800/400/arch" className="w-screen md:h-fit" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn bg-white btn-circle text-gray-900">❮</a>
                  <a href="#slide4" className="btn bg-white btn-circle text-gray-900">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full md:overflow-hidden">
                <img src="https://placeimg.com/800/400/arch" className="w-screen md:h-fit" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn bg-white btn-circle text-gray-900">❮</a>
                  <a href="#slide1" className="btn bg-white btn-circle text-gray-900">❯</a>
                </div>
              </div>
            </div>
            {/* end of banner */}

            {/* category shortcut */}
            {/* <OnDesktop> */}
            <div className="mt-12 py-4 px-8 grid md:grid-cols-4 grid-cols-2 h-fit rounded-[20px] whitespace-nowrap md:gap-2 items-center justify-center flex shadow-xl shadow-blue-50">
              <a href='' className='flex md:gap-x-3 gap-x-2 hover:bg-hover py-2 m-1 border border-1 border-[#b1d1e3] rounded-[10px] place-content-center'><img src={Image} className='lg:w-8 md:w-6 w-4' /><p className='lg:lg-title1 md:md-title1 title1 text-secColor'>Software</p></a>
              <a href='' className='flex md:gap-x-3 gap-x-2 hover:bg-hover py-2 m-1 border border-1 border-[#b1d1e3] rounded-[10px] place-content-center'><img src={Image} className='lg:w-8 md:w-6 w-4' /><p className='lg:lg-title1 md:md-title1 title1 text-secColor'>Gadget</p></a>
              <a href='' className='flex md:gap-x-3 gap-x-2 hover:bg-hover py-2 m-1 border border-1 border-[#b1d1e3] rounded-[10px] place-content-center'><img src={Image} className='lg:w-8 md:w-6 w-4' /><p className='lg:lg-title1 md:md-title1 title1 text-secColor'>Pakaian</p></a>
              <a href='' className='flex md:gap-x-3 gap-x-2 hover:bg-hover py-2 m-1 border border-1 border-[#b1d1e3] rounded-[10px] place-content-center'><img src={Image} className='lg:w-8 md:w-6 w-4' /><p className='lg:lg-title1 md:md-title1 title1 text-secColor'>Alat Tulis</p></a>
              <a href='' className='md:col-span-4 col-span-2 flex md:gap-x-3 gap-x-2 hover:bg-hover py-2 m-1 border border-1 border-[#b1d1e3] rounded-[10px] place-content-center'><img src={Image} className='lg:w-8 md:w-6 w-4' /><p className='lg:lg-title1 md:md-title1 title1 text-secColor'>Semua Kategori</p></a>
              <div className='w-full'>
              </div>
            </div>
            {/* </OnDesktop> */}
            {/* end of category shortcut */}
          </div>
        </div>
      </section>

      <section className='md:mt-20 mt-10 bg-[#f5f5f5]'>
        <div className='container grid md:grid-cols-6 md:py-[180px] py-4 pt-12 mx-auto'>
          <div className='md:col-span-3 mx-4 grid grid-cols-6 md:grid-cols-none content-between'>
            <div className='col-span-3'>
              <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-8 animate-bounce text-secColor'>Flash Deal</p>
              <p className='lg:lg-title1 md:lg-title1 sm-title1 md:mb-2 opacity-[.55] text-secColor'>Berakhir Dalam</p>
              <p className='lg:lg-header1 md:md-header1 sm-header1 text-secColor'>01 : 44 : 07</p>
            </div>
            <div className='col-span-3 md:pb-12 md:static absolute right-4'>
              <button className="btn w-fit lg:gap-x-8 md:gap-x-6 gap-x-4 lg:pb-[85px] md:pb-[45px] lg:pt-[60px] md:pt-[30px] lg:px-[70px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='lg:lg-title1 md:md-title1 sm-title1 font-semibold text-white capitalize'>Lihat Semua</p><img src={LongArrowRight} className='lg:w-14 md:w-8 w-6' /></button>
            </div>
          </div>
          <div className='md:col-span-3 mx-4 md:px-4 px-2 overflow-x-scroll md:pt-0 pt-12 pb-12 scrollbar'>
            <div className='flex md:flex-none gap-x-6'>
              {x.map((val, idx) => (
                <Card key={idx} />
              )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* recommended products */}
      <section className='md:mt-20 mt-10'>
        <div className='container md:mt-40 mt-14 bg-red-9900 mx-auto'>
          <div className='mx-4 md:mx-0'>
            <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-[115px] mb-10 text-secColor'>Rekomendasi Buat Kamu</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-6 gap-x-4 md:gap-y-12 gap-y-8'>
              {y.map((val, idx) => (
                <Card key={idx} />
              )
              )}
            </div>
            <div className='md:my-44 my-24 container mx-auto'>
              <center>
                <button className="btn w-fit lg:gap-x-8 md:gap-x-6 gap-x-4 lg:pb-[85px] md:pb-[45px] lg:pt-[60px] md:pt-[30px] lg:px-[70px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='lg:lg-title1 md:md-title1 sm-title1 font-semibold text-white capitalize'>Tampilkan lebih banyak</p><img src={List} className='lg:w-8 md:w-6 w-4' /></button>
              </center>
            </div>
          </div>
        </div>
      </section>
      {/* end of recommended products */}

      {/* footer */}
      <section className='mt-20 md:py-[150px] py-12 md:px0 p-4 bg-[#f5f5f5]'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 md:gap-x-24 md:gap-y-0 gap-y-12 bg-[#1d1441] md:rounded-[40px] rounded-[25px] md:p-[80px] p-12'>
            <div className=''>
              <span className='bg-clip-text text-transparent bg-gradient lg:lg-header1 md:md-header1 sm-header1'>Himasi Store</span>
              <p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] text-justify md:mt-6 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mrhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            </div>
            <OnAtLeastNotebook>
              <div className='md:grid md:grid-cols-3'>
                <span className='md:justify-self-end'>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
              </div>
            </OnAtLeastNotebook>
            <OnMobile>
              <div className='grid gap-y-3'>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </OnMobile>
          </div>
        </div>
      </section >
      {/* end of footer */}

    </>
  )
}

export default App