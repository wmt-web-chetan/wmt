import dynamic from "next/dynamic";


export const componentRegistry={
 ctaWithButtons: dynamic(() => import("../components/HeroSection")),
 componentTwo: dynamic(()=> import("../components/NewComponent"))
 

}