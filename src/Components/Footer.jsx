import { motion } from "framer-motion"

import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";



const Footer = ()=>{
    return <>
    <div className="bg-gradient-to-r from-[#4f3763] to-[#88629c] pt-3">
        <div className=" flex auto item-around">
            <div className="W-1/3  border-t-2 border-gray-300 flex-1 my-1" />

            <div className="W-1/3  flex flex-1 justify-around m-0.5">

            <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                 <a target="_blank" href="https://www.instagram.com/kraken.stl/" > 
                    <GrInstagram className="text-gray-300 text-2xl"/> 
                </a>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://krakenstl.com/" target="_blank" >
                    <BiWorld className="text-gray-300 text-2xl"/> 
                </a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://www.youtube.com/@krakenstl-q2z" target="_blank" > 
                    <FaYoutube className="text-gray-300 text-2xl"/>
                </a>

            </motion.div>
            
               
        
            </div>

            <div className="W-1/3  border-t-2  border--300gray flex-1 my-1"/>
        </div>


        <div className=" p-1">
        <img src="https://krakenstl.wordpress.com/wp-content/uploads/2024/06/krakenstl-logo.png?resize=219%2C219" className="w-14 mx-auto" alt="" />
        <p className="text-xs text-center text-slate-300">KrakenSTL © Copyright </p>
       
        </div>
       
        




    </div>
        
    </>
}

export default Footer