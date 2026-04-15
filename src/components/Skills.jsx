
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { BsCss } from "react-icons/bs";
import { SiAxios } from "react-icons/si";

import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbApiApp } from "react-icons/tb";
import { SiAuthelia } from "react-icons/si";
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";
import { RiMultiImageFill } from "react-icons/ri";

import { DiMongodb } from "react-icons/di";
import { SiMongoosedotws } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";

import { SiGooglegemini } from "react-icons/si";
import { SiDwavesystems } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { motion } from "framer-motion"

function Skills() {
  return (
    <div>
      <section id='Skills'>


        <div className="w-full h-auto bg-[#050508] flex items-center py-28 px-8 border-t border-b border-[#9614bd]" >


          <div className="w-full mx-auto h-screen bg-[#050508] flex items-center justify-center text-white  flex-col gap-4">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}

              className="md:mb-9 mb-4">
              <h1 className='text-[15px] text-[#9614bd]'>SKILLS ----</h1>
              <h1 className='md:text-4xl text-3xl mt-2 font-bold w-auto h-auto text-white'>Tech I work with. </h1>
            </motion.div>



            <div className='flex flex-col md:flex-row items-center w-full   gap-5'>



              {/* card1*/}
              <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}

                className='flex flex-col w-full border gap-6 border-[#9614bd] rounded-md p-6   ' >


                <div>
                  <h1 className='text-md text-[#9614bd] font-semibold'>Frontend</h1>
                </div>


                <div className="flex flex-wrap gap-3 w-60">

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-md text-[#9614bd]">
                      <FaReact />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>React.js</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <RiJavascriptFill />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>javeScript</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <RiTailwindCssFill />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Tailwind CSS</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-lg text-[#9614bd]">
                      <SiHtml5 />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>HTML 5</h1>
                    </div>
                  </div>


                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-md text-[#9614bd]">
                      <BsCss />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>CSS3</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-md text-[#9614bd]">
                      <SiAxios />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Axios</h1>
                    </div>
                  </div>

                </div>


              </motion.div>

              {/* card2*/}
              <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}

                className='flex flex-col w-full border gap-4 border-[#9614bd] rounded-md p-6 ' >


                <div>
                  <h1 className='text-md text-[#9614bd] font-semibold'>Backend</h1>
                </div>


                <div className="flex flex-wrap gap-3 w-60">

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      < FaNode />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Node.js</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <SiExpress />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Express.js</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <TbApiApp />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>REST APIs</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <SiAuthelia />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>JWT Auth</h1>
                    </div>
                  </div>


                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <TbAlignBoxLeftMiddleFilled />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Middleware</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <RiMultiImageFill />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Multer</h1>
                    </div>
                  </div>

                </div>


              </motion.div>

              {/* card3*/}
              <motion.div
              
               initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
              
              className='flex flex-col w-full border gap-4 border-[#9614bd] rounded-md p-6 ' >


                <div>
                  <h1 className='text-md text-[#9614bd] font-semibold'>Database & Cloud</h1>
                </div>


                <div className="flex flex-wrap gap-3 w-60">

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <DiMongodb />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>MongoDB</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <SiMongoosedotws />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Mongoose</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      < SiCloudinary />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Cloudinary</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-2xl text-[#9614bd]">
                      <DiMongodb />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>MongoDB Atlas</h1>
                    </div>
                  </div>



                </div>


              </motion.div>

              {/* card4*/}
              <motion.div 
              
               initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
              
              className='flex flex-col w-full border gap-4 border-[#9614bd] rounded-md p-6 ' >


                <div>
                  <h1 className='text-md text-[#9614bd] font-semibold'>AI & Tools</h1>
                </div>


                <div className="flex flex-wrap gap-2.5 w-60">

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-[16px] text-[#9614bd]">
                      <SiGooglegemini />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Gemini API</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-[13px] text-[#9614bd]">
                      <SiDwavesystems />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>RAG system</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-sm text-[#9614bd]">
                      <BsGithub />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Git & gitHub</h1>
                    </div>
                  </div>

                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-sm text-[#9614bd]">
                      <SiPostman />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>Postman</h1>
                    </div>
                  </div>


                  <div className='flex items-center gap-1.5  bg-[#270132] rounded-md border border-[#9614bd] pl-2 pr-2'>
                    <div className="text-md text-[#9614bd]">
                      <VscVscode />
                    </div>

                    <div>
                      <h1 className='text-sm font-mono text-[#eee0f3af] '>VS code</h1>
                    </div>
                  </div>



                </div>


              </motion.div>

            </div>



          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills