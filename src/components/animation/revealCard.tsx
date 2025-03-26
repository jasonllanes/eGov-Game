import { motion,useInView,useAnimation } from "framer-motion"
import { useEffect, useRef } from "react";

interface Props{
    children: JSX.Element;
    width?:"fit-content" | "100%";
}

const CardSlide = ({children,width = "fit-content"}:Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation();
    useEffect(()=>{
        if (isInView) {
            mainControls.start("visible")
         
        }

    },[isInView])

  return (
    <div ref={ref} className="  w-1/3  max-w-[90%] relative  flex flex-col gap-1 hover:translate-y-[-10px] duration-700 transition-all" style={{position:"relative",width, overflow:"hidden"}}>
        <motion.div 
        variants={{
            hidden:{opacity:0,filter:"blur(10)",y:75},
            visible:{opacity:1,y:0,filter:"blur(0)"}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.25}}
        >{children}</motion.div>
        
    </div>
  )
}

export default CardSlide