import { useEffect } from "react";
import AOS from 'aos';


const GalaryImgCard = ({ kidsCar }) => {
    const { photo, } = kidsCar;
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="card w-86 glass ">
            <figure><img data-aos="fade-down-right" className="h-80 w-80 py-2" src={photo} alt="car!" /></figure>
        </div>
    );
};

export default GalaryImgCard;