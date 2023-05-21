

const GalaryImgCard = ({ kidsCar }) => {
    const { photo, } = kidsCar;
    return (
        <div className="card w-86 glass ">
            <figure><img className="h-80 w-80 py-2" src={photo} alt="car!" /></figure>
        </div>
    );
};

export default GalaryImgCard;