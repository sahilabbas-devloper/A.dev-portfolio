import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='z-10 flex items-center w-full h-13 pt-4  fixed pr-4  justify-between pl-6'>


        {/*Logo */}
        <div>
          <a  href='#Hero' className=' text-2xl font-bold text-white'>A<span className='text-[#7c3aed]'>.</span>DEV</a>
        </div>



        <nav className="text-sm md:flex gap-10 font-semibold text-gray-50 hidden ">
          <a href='#Hero' className='hover:text-purple-300  transition transform ease-in-out  hover:translate-y-2' >Hero</a>
        <a href='#About' className='hover:text-purple-300  transition transform ease-in-out  hover:translate-y-2' >About</a>
         <a href='#Skills' className='hover:text-purple-300  transition transform ease-in-out  hover:translate-y-2' >Skills</a>
         <a href='#project' className='hover:text-purple-300  transition transform ease-in-out  hover:translate-y-2' >Project</a>
          <a href='#Contect' className='hover:text-purple-300  transition transform ease-in-out  hover:translate-y-2' >Contect</a>
        </nav>



        <a
        href='#Contect'
          className=" btn-animated p-4  border-3 border-[#9614bd] w-auto h-10 rounded-2xl   flex items-center justify-center text-md font-semibold bg-linear-to-r from-[#501297] via-[#9614bd] to-[#501297] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text"
          >
          Let' s Connect
        </a>



      </div>
    </div>
  )
}

export default Navbar