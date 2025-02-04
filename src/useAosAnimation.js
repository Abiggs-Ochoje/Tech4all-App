import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const useAosAnimation = (duration = 1000, easing ='ease-in-out', once='true') => {

    useEffect(() => {
        AOS.init({
            duration, // Animation duration in milliseconds
            easing, // Easing function
            once, 
        });


        const handleScroll = () => {
            document.querySelectorAll('[data-aos]').forEach((element) => {
                const rect = element.getBoundingClientRect();
            

                // Check if the element has scrolled out of view
                if ( rect.top > window.innerHeight || rect.bottom < 0) {
                    element.classList.add("slideOut");
                } else {
                    element.classList.remove("slideOut")
                }
            })
            };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [duration, easing, once]);



// The below code was used before conversion to custom hook
    // const imgRef = useRef(null);
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         easing: 'ease-in-out'
    //     })

    //    const handleScrolling = () => {
    //         if (imgRef.current) {
    //           const  rectImg = imgRef.current.getBoundingClientRect();
            
    //         if (rectImg.top > window.innerHeight || rectImg.bottom < 0 ){
    //                 imgRef.current.classList.add('zoom-in')
    //         } else{
    //                 imgRef.current.classList.remove('zoom-in')
    //         }
    //     }
    // }

    // window.addEventListener('scroll', handleScrolling)
    // return () => window.removeEventListener('scroll', handleScrolling);

    // }, [duration, easing]);

}

    export default useAosAnimation;