import { Link } from 'react-router-dom'
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Contect from "./Contect"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


function Hero() {
    return (
        <div>
            <section id='Hero'>


                <div className="w-full h-screen bg-[#050508] flex flex-col items-center justify-center relative overflow-hidden" >

                    {/* Purple glow effect */}
                    <div className="absolute w-150 h-150 bg-purple-700 rounded-full opacity-10 blur-[150px]"></div>

                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                        linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>


                    <motion.div


                        className="z-10 w-full mx-auto  flex items-center justify-center flex-col gap-2 ">


                        <div className="flex items-center gap-2 border border-purple-800 rounded-full px-4 py-1.5 mt-12">
                            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                            <span className="text-purple-400 text-xs tracking-widest uppercase">
                                Available for Work
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}

                            className="text-4xl font-bold text-white">Hi, I'm <span className=" text-6xl font-mono bg-linear-to-r from-[#501297] via-[#9614bd] to-[#501297] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text">Ahsan</span></motion.div

                        >


                        <motion.div

                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}

                            className=' mb-5 text-4xl bg-linear-to-r from-[#501297] via-[#9c10c7] to-[#501297] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] font-semibold animate-text'>
                            <Typewriter words={["Full stack Devloper.", "AI Enthusiast.", 'MERN Stack Developer.']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1600}

                            /></motion.div>


                        <motion.div

                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}

                            className='md:text-md text-sm font-normal text-[#ebe1f7c7] font-memo opacity-50 p-4'>
                            A passionate MERN Stack Developer who builds
                            real-world web applications with clean code
                            and modern UI. Currently exploring AI integration
                            to build smarter, more powerful products.
                        </motion.div>

                        <motion.div

                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}

                            className='flex items-center gap-10 mt-5 mb-12'>
                            <a
                                className="   p-4 text-[#d4bdfbc9] font-semibold text-sm  w-auto h-10 rounded-2xl  bg-linear-to-r from-[#ca35f7] via-[#7318e3] to-[#cf30ff] flex items-center justify-center text-md  animate-text"
                                 href='#project'>
                                Veiw My Project
                            </a>

                            <a
                                className=" btn-animated p-4  border-3 border-[#9614bd] w-auto h-10 rounded-2xl   flex items-center justify-center text-md font-semibold bg-linear-to-r from-[#501297] via-[#9614bd] to-[#501297] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text"
                                href='#Contect'>
                                Let' s Connect
                            </a>
                        </motion.div>


                        <motion.div
                        
                        initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}

                        className='w-auto h-auto p-2 flex flex-wrap md:gap-10 gap-10 pl-18 '>

                            <div className='flex items-center gap-1.5 p-2  rounded-md  pl-2 pr-2'>
                                <div className="text-2xl text-[#9614bd]">
                                    <DiMongodb />
                                </div>

                                <div>
                                    <h1 className='text-sm font-mono text-[#eee0f3af] '>MongoDB</h1>
                                </div>
                            </div>

                            <div className='flex items-center gap-1.5 p-2  rounded-md  pl-2 pr-2'>
                                <div className="text-2xl text-[#9614bd]">
                                    <SiExpress />
                                </div>

                                <div>
                                    <h1 className='text-sm font-mono text-[#eee0f3af] '>Express.js</h1>
                                </div>
                            </div>

                            <div className='flex items-center gap-1.5 p-2  rounded-md  pl-2 pr-2'>
                                <div className="text-2xl text-[#9614bd]">
                                    <FaReact />
                                </div>

                                <div>
                                    <h1 className='text-sm font-mono text-[#eee0f3af] '>React.js</h1>
                                </div>
                            </div>

                            <div className='flex items-center gap-1.5 p-2  rounded-md  pl-2 pr-2'>
                                <div className="text-2xl text-[#9614bd]">
                                    < FaNode />
                                </div>

                                <div>
                                    <h1 className='text-sm font-mono text-[#eee0f3af] '>Node.js</h1>
                                </div>
                            </div>

                        </motion.div>

                    </motion.div>
                </div>
            </section>

            <About />
            <Skills />
            <Project />
            <Contect />







        </div>
    )
}

export default Hero