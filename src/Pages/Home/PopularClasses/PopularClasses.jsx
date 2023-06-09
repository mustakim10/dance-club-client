import img1 from '../../../../public/classes/7.jpg'
import img2 from '../../../../public/classes/2.jpg'
import img3 from '../../../../public/classes/3.jpg'
import img4 from '../../../../public/classes/4.jpg'
import img5 from '../../../../public/classes/5.jpg'
import img6 from '../../../../public/classes/6.jpg'

const PopularClasses = () => {
    return (
        <div>
            <h2 className='text-4xl my-16 font-bold text-center'>Our Popular Classes</h2>
            <div className='md:grid md:grid-cols-2 gap-8  '>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
               
            </div>
        </div>
    );
};

export default PopularClasses;