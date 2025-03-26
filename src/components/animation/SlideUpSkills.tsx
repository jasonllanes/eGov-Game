import { motion,useInView,useAnimation } from "framer-motion"
import { useEffect, useRef } from "react";

interface Props{
    children: JSX.Element;
    width?:"fit-content" | "100%";
}

const SlideUpSkills = ({children}:Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation();
    const slideControls = useAnimation();


    useEffect(()=>{
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")

        }

    },[isInView])

  return (
    <div ref={ref} className=" relative w-1/3 lg:w-[300px] md:w-[90%]" >
        <motion.div 
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.25}}
        >{children}</motion.div>
        <motion.div 
        variants={{
            hidden:{top:0},
            visible:{top:"100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5,ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom:4,left:0,right:0,background:"#e11d48",zIndex:20,
        }}
        />
    </div>
  )
}

export default SlideUpSkills