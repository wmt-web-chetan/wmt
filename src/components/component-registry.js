import dynamic from "next/dynamic";


export const componentRegistry={
 hero: dynamic(() => import("../components/HeroSection")),
 
 

}