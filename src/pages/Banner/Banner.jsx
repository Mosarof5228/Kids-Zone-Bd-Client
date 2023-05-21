import img1 from '../../assets/image/bannerImg1.jpg'
import img2 from '../../assets/image/bannerImg2.jpg'
import img3 from '../../assets/image/bannerImg3.jpg'
import img4 from '../../assets/image/bannerImg4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full mb-4">
            <div id="slide1" className="carousel-item relative w-full h-[600px] rounded-xl ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-xl">
                    <div className='text-white space-y-7 w-1/2 ml-12'>
                        <h2 className='text-6xl font-bold'>Your Child Our Responsibility</h2>
                        <p>Welcome to Kids Car Website, your one-stop destination for all things related to kids' cars! Whether you're a parent looking to surprise your child with a fun and exciting ride or a car enthusiast searching for the perfect gift, we've got you covered.</p>
                        <div>
                            <button className="btn btn-accent mr-5">Most Popular Kids Car</button>
                            <button className="btn btn-outline btn-secondary">All Kis Car Price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img2} className="w-full  rounded-xl" />
                <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
                    <div className='text-white space-y-7 w-1/2 ml-12'>
                        <h2 className='text-6xl font-bold'>Best Kids' Cars for Different Age Groups</h2>
                        <p>Welcome to Kids Car Website, your one-stop destination for all things related to kids' cars! Whether you're a parent looking to surprise your child with a fun and exciting ride or a car enthusiast searching for the perfect gift, we've got you covered.</p>
                        <div>
                            <button className="btn btn-accent mr-5">Most Popular Kids Car</button>
                            <button className="btn btn-outline btn-secondary">All Kis Car Price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
                    <div className='text-white space-y-7 w-1/2 ml-12'>
                        <h2 className='text-6xl font-bold'>Best Kids' Cars for Different Age Groups</h2>
                        <p>Welcome to Kids Car Website, your one-stop destination for all things related to kids' cars! Whether you're a parent looking to surprise your child with a fun and exciting ride or a car enthusiast searching for the perfect gift, we've got you covered.</p>
                        <div>
                            <button className="btn btn-accent mr-5">Most Popular Kids Car</button>
                            <button className="btn btn-outline btn-secondary">All Kis Car Price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
                    <div className='text-white space-y-7 w-1/2 ml-12'>
                        <h2 className='text-6xl font-bold'>Best Kids' Cars for Different Age Groups</h2>
                        <p>Welcome to Kids Car Website, your one-stop destination for all things related to kids' cars! Whether you're a parent looking to surprise your child with a fun and exciting ride or a car enthusiast searching for the perfect gift, we've got you covered.</p>
                        <div>
                            <button className="btn btn-accent mr-5">Most Popular Kids Car</button>
                            <button className="btn btn-outline btn-secondary">All Kis Car Price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;