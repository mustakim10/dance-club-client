import Marquee from "react-fast-marquee";
import xtra1  from '../../../../public/xtra/1.jpg'
import xtra2  from '../../../../public/xtra/2.jpg'
import xtra3  from '../../../../public/xtra/3.jpg'
import xtra4  from '../../../../public/xtra/4.jpg'
import xtra5  from '../../../../public/xtra/5.jpg'
import xtra6  from '../../../../public/xtra/6.jpg'
import xtra7  from '../../../../public/xtra/7.jpg'

const Xtra = () => {
    return (
        <div className='container my-5'>
        <h2 className='text-3xl fw-bold text-center my-3'>Our More Classes</h2>
        <Marquee speed={100}>
            <img className='m-img w-50' src={xtra1} alt="" />
            <img className='m-img w-50' src={xtra2} alt="" />
            <img className='m-img w-50' src={xtra3} alt="" />
            <img className='m-img w-50' src={xtra4} alt="" />
            <img className='m-img w-50' src={xtra5} alt="" />
            <img className='m-img w-50' src={xtra6} alt="" />
            <img className='m-img w-50' src={xtra7} alt="" />

        </Marquee>
    </div>
    );
};

export default Xtra;