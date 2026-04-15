import { motion } from "framer-motion"

function About() {
  return (
    <div>
      <section id='About'>


        <div className="w-full h-auto bg-[#0a0a12] flex items-center py-40 px-8 border-t border-b border-[#9614bd]" >


          <div className="w-full h-screen pb-4  bg-[#0a0a12] flex md:flex-row flex-col md:justify-evenly gap-9  md:gap-6 items-center  text-white ">

            <div className='btn-animated p-4 object-contain hover:shadow-[#8b1fac] hover:shadow-lg border-5 border-[#9614bd] w-90 h-90 rounded-full overflow-hidden  flex items-center justify-center text-md font-semibold bg-linear-to-r from-[#501297] via-[#9614bd] to-[#501297] bg-clip-text text-transparent  drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text'>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                className='w-150 h-100 overflow-hidden object-contain'>
                <img src="profilepic.jpg" alt="Profilepic" />
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}

              className='md:w-150 w-auto h-70 flex flex-col gap-2 '>
              <h1 className='text-[15px] text-[#9614bd]'>ABOUT ME ----</h1>
              <h1 className='text-4xl font-bold w-auto h-auto text-white'>Fresher with a <span className='text-[#9614bd]'>Builder's</span> mindset </h1>
              <p className='text-[#eee0f3af] w-auto h-auto mt-8'>I'm a <span className='text-[#9614bd]'>MERN stack Devloper </span> Who Loves turning ideas into real, working products.
                From authentication systems to AI-powered feature - i build it all.
              </p>

              <p className='text-[#eee0f395]  mt-2'>Currently focused on building strong portolie and integrating <span className='text-[#9614bd]'> AI/LLM capabilities </span>
                into web application using the gemini API.
              </p>

              <p className='text-[#eee0f39d]  mt-2'>I believe in <span className='text-[#9614bd]'>learning by bilding - </span>
                every project teacher something new.
              </p>

              <div className='w-auto h-auto md:mt-5 flex flex-wrap gap-5'>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}

                  className='flex flex-col mt-4  border rounded-xl border-[#9614bd] p-4 bg-[#0a0110] w-auto h-auto '>
                  <h1 className='text-4xl text-[#9614bd] font-bold'>5+</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono '>Projects</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono'>Built</h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}

                  className='flex flex-col mt-4  border rounded-xl border-[#9614bd] p-4 bg-[#0a0110] w-auto h-auto '>
                  <h1 className='text-4xl text-[#9614bd] font-bold'>MERN</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono '>Primary Stack</h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}

                  className='flex flex-col mt-4  border rounded-xl border-[#9614bd] p-4 bg-[#0a0110] w-auto h-auto '>
                  <h1 className='text-4xl text-[#9614bd] font-bold'>AI</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono '>Integration</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono'>Focus</h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}

                  className='flex flex-col mt-4  border rounded-xl border-[#9614bd] p-4 bg-[#0a0110] w-auto h-auto '>
                  <h1 className='text-6xl text-[#9614bd] font-bold'>∞</h1>
                  <h1 className='text-[12px] text-[#eee0f38d] font-mono '>Learning Mindset</h1>
                </motion.div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About