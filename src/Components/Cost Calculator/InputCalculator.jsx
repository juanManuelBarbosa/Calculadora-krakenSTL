    import {motion} from 'framer-motion'
    import {Input} from '@nextui-org/react'
 
    const InputCalculator =  ({label , id} )=>{
        return(
            <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}
                    >
                    <Input 
                    type="text" 
                    label={label} 
                    id={id} 
                    className='w-full'  
                    color='content' 
                    variant='faded'
                    classNames={{
                    label: "text-slate-200",
                    inputWrapper: "bg-gradient-to-r from-[#4f3763] to-[#88629c] border-1 border-slate-800 text-slate-200"} }  />
                    </motion.div>
        )
    }

    export default InputCalculator;