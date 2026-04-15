
import { useRef, useEffect } from "react";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
function Project() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let isPaused = false;
    const interval = setInterval(() => {
      if (container) {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 2000);


    container.addEventListener('mouseenter', () => isPaused = true);
    container.addEventListener('mouseleave', () => isPaused = false);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', () => isPaused = true);
      container.removeEventListener('mouseleave', () => isPaused = false);
    };
  }, []);



  return (
    <div>
      <section id='project'>


        <div className="w-full h-auto bg-[#0a0a12] flex items-center py-28 px-4 border-t border-b border-[#9614bd]" >


          <div className="w-full h-auto bg-[#0a0a12] flex items-center justify-center text-white ">



            <div className='flex flex-col w-full h-auto '>

              <div className="md:mb-9 mb-9">
                <h1 className='text-[15px] text-[#9614bd]'>WORK ----</h1>
                <h1 className='md:text-3xl text-3xl mt-2 font-bold w-auto h-auto text-white'>Featured Projects </h1>
              </div>

              <div
                ref={scrollRef}

                className='flex flex-row gap-6  p-4 overflow-x-auto w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>

                {/* card1*/}
                <div className='shrink-0 flex flex-col w-80 md:w-80 h-auto bg-[#000001] border border-[#9614bd] rounded-md gap-2'>

                  <div className='w-full h-60 overflow-hidden object-cover rounded-t-md'>
                    <img src="LinkedUp.jpg" alt="img"
                      className='w-full h-60'
                    />
                  </div>

                  <div className="md:mb-9 mb-4 p-2">
                    <h1 className='text-[8px] text-[#9614bd]'>01 - Featured</h1>
                    <h1 className=' text-md  font-bold w-auto h-auto text-white'> LinkedUp </h1>
                    <p className='text-[12px] text-[#eee0f395]  mt-2 mb-2'>A full-Featured LinkedIn clone with jwt auth , post , feed ,like ,comment ,  <span className='text-[#9614bd]'> real-time notificatin , debouncing , ui optimistic, ratelimeter, and cloudainary uploads with multer </span></p>



                    {/*ten stack*/}
                    <div className="w-auto h-auto flex flex-wrap gap-2 mb-2">
                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <FaReact />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>React.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <RiTailwindCssFill />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < FaNode />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Node.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <DiMongodb />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>MongoDB</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < SiCloudinary />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Cloudinary</h1>
                        </div>
                      </div>

                    </div>

                    {/*links*/}
                    <div>
                      <h1 className="text-[12px] font-semibold ">Live Link : <a href="https://linked-frontend.vercel.app/" className="text-[#9614bd]">LinkedUp</a></h1>
                      <h1 className="text-[12px] font-semibold ">GitHub Link : <a href="https://github.com/sahilabbas-devloper" className="text-[#9614bd]" >GitHub.Ahsan</a></h1>
                    </div>




                  </div>

                </div>


                {/* card2*/}
                <div className='shrink-0  flex flex-col w-80 md:w-80 h-auto bg-[#000001] border border-[#9614bd] rounded-md gap-2'>

                  <div className='w-full h-60 overflow-hidden object-cover rounded-t-md'>
                    <img src="invoice.jpg" alt="img"
                      className='w-full h-60'
                    />
                  </div>

                  <div className="md:mb-9 mb-4 p-2">
                    <h1 className='text-[8px] text-[#9614bd]'>02 - Featured</h1>
                    <h1 className=' text-md  font-bold w-auto h-auto text-white'> Invoice Builder </h1>
                    <p className='text-[12px] text-[#eee0f395]  mt-2 mb-2'>Built a MERN stack invoice builder where users can create, manage, and download professional invoices as PDF. Features include invoice CRUD, PDF generation on the backend, download via API, and clean responsive UI.</p>



                    {/*ten stack*/}
                    <div className="w-auto h-auto flex flex-wrap gap-2 mb-2">
                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <FaReact />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>React.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <RiTailwindCssFill />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < FaNode />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Node.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <DiMongodb />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>MongoDB</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < SiExpress />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Express.js</h1>
                        </div>
                      </div>

                    </div>

                    {/*links*/}
                    <div>
                      <h1 className="text-[12px] font-semibold ">Live Link : <a href="https://invoice-builder-six.vercel.app/" className="text-[#9614bd]"> Invoice Builder</a></h1>
                      <h1 className="text-[12px] font-semibold ">GitHub Link : <a href="https://github.com/sahilabbas-devloper" className="text-[#9614bd]" >GitHub.Ahsan</a></h1>
                    </div>




                  </div>

                </div>

                {/* card3*/}
                <div className='shrink-0  flex flex-col w-80 md:w-80 h-auto bg-[#000001] border border-[#9614bd] rounded-md gap-2'>

                  <div className='w-full h-60 overflow-hidden object-cover rounded-t-md'>
                    <img src="chatgpt.png" alt="img"
                      className='w-full h-60'
                    />
                  </div>

                  <div className="md:mb-9 mb-4 p-2">
                    <h1 className='text-[8px] text-[#9614bd]'>03 - Featured</h1>
                    <h1 className=' text-md  font-bold w-auto h-auto text-white'> AI ChatBot </h1>
                    <p className='text-[12px] text-[#eee0f395]  mt-2 mb-2'>Built a ChatGPT-like conversational AI app using Google Gemini API. Features real-time streaming responses, chat history, and a clean modern UI.</p>



                    {/*ten stack*/}
                    <div className="w-auto h-auto flex flex-wrap gap-2 mb-2">
                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <FaReact />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>React.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <RiTailwindCssFill />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < FaNode />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Node.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <DiMongodb />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>MongoDB</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < SiExpress />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Express.js</h1>
                        </div>
                      </div>

                    </div>

                    {/*links*/}
                    <div>
                      <h1 className="text-[12px] font-semibold ">Live Link : <a href="chatgpt-lite-v1.netlify.app" className="text-[#9614bd]"> AI chatbot</a></h1>
                      <h1 className="text-[12px] font-semibold ">GitHub Link : <a href="https://github.com/sahilabbas-devloper" className="text-[#9614bd]" >GitHub.Ahsan</a></h1>
                    </div>




                  </div>

                </div>



                {/* card4*/}
                <div className=' shrink-0 flex flex-col w-80 md:w-80 h-auto bg-[#000001] border border-[#9614bd] rounded-md gap-2'>

                  <div className='w-full h-60 overflow-hidden object-cover rounded-t-md'>
                    <img src="photography.png" alt="img"
                      className='w-full h-60'
                    />
                  </div>

                  <div className="md:mb-9 mb-4 p-2">
                    <h1 className='text-[8px] text-[#9614bd]'>04 - Featured</h1>
                    <h1 className=' text-md  font-bold w-auto h-auto text-white'> Photography E-Commerce </h1>
                    <p className='text-[12px] text-[#eee0f395]  mt-2 mb-2'>Built a MERN stack e-commerce platform for photography products. Features include product listings, shopping cart, order management, and a clean responsive UI.</p>



                    {/*ten stack*/}
                    <div className="w-auto h-auto flex flex-wrap gap-2 mb-2">
                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <FaReact />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>React.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <RiTailwindCssFill />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < FaNode />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Node.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <DiMongodb />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>MongoDB</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < SiExpress />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Express.js</h1>
                        </div>
                      </div>


                    </div>

                    {/*links*/}
                    <div>
                      <h1 className="text-[12px] font-semibold ">Live Link : <a href="sahil-frontend-vite-2026-wwxetrf-un.vercel.app" className="text-[#9614bd]"> Photography E-Commerce </a></h1>
                      <h1 className="text-[12px] font-semibold ">GitHub Link : <a href="https://github.com/sahilabbas-devloper" className="text-[#9614bd]" >GitHub.Ahsan</a></h1>
                    </div>




                  </div>

                </div>



                {/* card5*/}
                <div className='shrink-0  flex flex-col w-80 md:w-80 h-auto bg-[#000001] border border-[#9614bd] rounded-md gap-2'>

                  <div className='w-full h-60 overflow-hidden object-cover rounded-t-md'>
                    <img src="abbastuition.png" alt="img"
                      className='w-full h-60'
                    />
                  </div>

                  <div className="md:mb-9 mb-5 p-2">
                    <h1 className='text-[8px] text-[#9614bd]'>05 - Featured</h1>
                    <h1 className=' text-md  font-bold w-auto h-auto text-white'> Abbas Tuition — Client Website </h1>
                    <p className='text-[12px] text-[#eee0f395]  mt-2 mb-2'> Built and deployed a real client website for a tuition center. Features complete CRUD for managing students, courses, and announcements with a clean responsive UI.</p>



                    {/*ten stack*/}
                    <div className="w-auto h-auto flex flex-wrap gap-2 mb-2">
                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <FaReact />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>React.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <RiTailwindCssFill />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < FaNode />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Node.js</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          <DiMongodb />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>MongoDB</h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                        <div className="text-sm text-[#9614bd]">
                          < SiExpress />
                        </div>

                        <div>
                          <h1 className='text-[8px] font-mono text-[#eee0f3af] '>Express.js</h1>
                        </div>
                      </div>

                    </div>

                    {/*links*/}
                    <div>
                      <h1 className="text-[12px] font-semibold ">Live Link : <a href="https://abbastuitionclasses.netlify.app/" className="text-[#9614bd]"> Abbas Tuition — Client Website </a></h1>
                      <h1 className="text-[12px] font-semibold ">GitHub Link : <a href="https://github.com/sahilabbas-devloper" className="text-[#9614bd]" >GitHub.Ahsan</a></h1>
                    </div>




                  </div>

                </div>



              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project