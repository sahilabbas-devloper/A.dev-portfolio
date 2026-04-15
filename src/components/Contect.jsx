import { useState } from "react";
import { motion } from "framer-motion"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMailLock } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";

const BASE_URL = import.meta.env.VITE_API_URL;



function Contect() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [Loading, setLoading] = useState(false)



  const submit = async (e) => {
    e.preventDefault();

    setLoading(true)

    try {
      const res = await axios.post(`${BASE_URL}/api/send/message`,
        { name, email, message }
      )

      setname('')
      setemail('')
      setmessage('')
      toast.success(res.data.message)
    } catch (error) {
      console.log("massage send error", error)
      const msg = error.response?.data?.message || "Something went wrong!"
      toast.error(msg)
    } finally {
      setLoading(false)
    }


  }


  return (
    <div>
      <section id='Contect'>



        <div className="w-full h-auto bg-[#050508] flex items-center py-28 px-8" >

          <Toaster />
          <div className="w-full mx-auto  flex-col bg-[#050508] flex items-center justify-center text-white ">


            <div className='flex flex-col  gap-3 items-center '>

              <div className="md:mb-9 mb-9">
                <h1 className='text-[15px] text-[#9614bd]'>CONTACT ----</h1>
                <h1 className='md:text-3xl text-3xl mt-2 font-bold w-auto h-auto text-white'>Let's work <span className='text-[#9614bd]'>Together</span> </h1>
              </div>


              <div className='flex flex-col md:flex-row  gap-3 items-center '>

                <motion.div

                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}

                  className='border border-[#9614bd] bg-[#0a0a12] flex flex-col gap-2 w-90 h-102 p-4 rounded-sm'>

                  <div className="">
                    <h1 className='text-[10px] text-[#9614bd]'>CONTACT ----</h1>
                    <h1 className='text-2xl  font-bold w-auto h-auto text-white mb-12'> Details</h1>
                  </div>

                  <div className='flex gap-5 items-center mb-4'>

                    <div className="text-[30px]">
                      <MdAddIcCall />
                    </div>

                    <div className='text-md font-bold text-[#9614bd]'>
                      Contect No - <p className='font-normal text-[#ecdaf3]'> 91+ 7080254021</p>
                    </div>
                  </div>

                  <div className='flex gap-5 items-center mb-15'>

                    <div className="text-[30px]">
                      <MdOutlineMailLock />
                    </div>

                    <div className='text-md font-bold text-[#9614bd]'>
                      Email - <p className='font-normal text-[#ecdaf3]'> Sa9300421@gmail.com</p>
                    </div>
                  </div>


                  <div className="flex items-center gap-5 w-full justify-center ">

                    <a href="" className="text-[25px]">
                      <FaGithub />
                    </a>

                    <a href="" className="text-[25px]" >
                      < FaFacebookSquare />
                    </a>

                    <a href="" className="text-[25px]" >
                      <GrInstagram />
                    </a>

                    <a href="" className="text-[25px]">
                      <FaLinkedin />
                    </a>

                  </div>



                </motion.div>

                <motion.form action=""
                  onSubmit={submit}

                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='border rounded-sm border-[#9614bd] bg-[#0a0a12] flex flex-col gap-2 w-90  h-auto p-4'
                >
                  <label htmlFor=""
                    className='text-[10px] font-semibold text-[#c770e1f7]'
                  >YOUR NAME</label>
                  <input type="name"
                    required
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className='w-full p-4 h-10 outline-none border rounded-sm border-[#9614bd] '
                    placeholder='username'
                  />

                  <label htmlFor=""
                    className='text-[12px] font-semibold text-[#c770e1f7]'
                  >Email</label>
                  <input type="Email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className='w-full p-4 h-10 outline-none border rounded-sm border-[#9614bd] '
                    placeholder='Email'
                  />


                  <label htmlFor=""
                    className='text-[12px] font-semibold text-[#c770e1f7]'
                  >Message</label>
                  <input type="text"
                    required
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    className='w-full p-4 h-40 outline-none border rounded-sm border-[#9614bd] '
                    placeholder='Enter your message...'
                  />

                  <button
                    disabled={Loading}
                    type="submit"
                    className='mt-3 w-full  h-9 rounded-sm text-[#deadedf7]   bg-linear-to-r from-[#501297] via-[#9614bd] to-[#501297] bg-clip-border  drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text'
                  >
                    {Loading && (
                      <div className='w-full h-screen fixed inset-0 bg-black/10 flex items-center justify-center z-50'>

                        <div className='w-14 h-14 border-4 border-purple-700 border-t-transparent rounded-full animate-spin'></div>
                      </div>

                    )}


                    Send message  </button>

                </motion.form>

              </div>


            </div>


            <div className=" border-t gap-3 border-t-[#9614bd] mt-10 w-full flex items-center justify-center p-2 flex-col">
              <p> Mohd Ahsan Full stack devloper.</p>
              <p> Thnkyou...</p>

               <div className="flex items-center gap-5 w-full justify-center ">

                    <a href="https://github.com/sahilabbas-devloper" className="text-[25px]">
                      <FaGithub />
                    </a>

                    <a href="" className="text-[25px]" >
                      < FaFacebookSquare />
                    </a>

                    <a href="" className="text-[25px]" >
                      <GrInstagram />
                    </a>

                    <a href="https://www.linkedin.com/in/mohd-ahsan-811605386" className="text-[25px]">
                      <FaLinkedin />
                    </a>

                  </div>

            </div>


          </div>

        </div>
      </section>
    </div>
  )
}

export default Contect