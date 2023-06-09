import img1 from '../../../../public/banner/1.jpg';
import img2 from '../../../../public/banner/2.jpg';
import img3 from '../../../../public/banner/3.jpg';
import img4 from '../../../../public/banner/4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute h-full rounded-lg flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold'>Dance is an ART , Point your Dream & Follow it</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum illo qui similique delectus ratione repellendus dignissimos dolor, eos, hic nam facilis corrupti ut placeat. Molestiae necessitatibus quod cum sed dolores?</p>
        <button className="btn btn-primary mr-5">Discover more</button>
        <button className="btn btn-outline btn-secondary">Latest project</button>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute h-full rounded-lg flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold'>Affortable price for car service</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum illo qui similique delectus ratione repellendus dignissimos dolor, eos, hic nam facilis corrupti ut placeat. Molestiae necessitatibus quod cum sed dolores?</p>
        <button className="btn btn-primary mr-5">Discover more</button>
        <button className="btn btn-outline btn-secondary">Latest project</button>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute h-full rounded-lg flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold'>Affortable price for car service</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum illo qui similique delectus ratione repellendus dignissimos dolor, eos, hic nam facilis corrupti ut placeat. Molestiae necessitatibus quod cum sed dolores?</p>
        <button className="btn btn-primary mr-5">Discover more</button>
        <button className="btn btn-outline btn-secondary">Latest project</button>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute h-full rounded-lg flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold'>Affortable price for car service</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum illo qui similique delectus ratione repellendus dignissimos dolor, eos, hic nam facilis corrupti ut placeat. Molestiae necessitatibus quod cum sed dolores?</p>
        
        <button className="btn btn-outline btn-secondary">Discover more</button>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;