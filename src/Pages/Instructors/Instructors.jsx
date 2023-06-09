import ins1 from '../../../public/instructor/1.jpg'
import ins2 from '../../../public/instructor/2.jpg'
import ins3 from '../../../public/instructor/3.jpg'
import ins4 from '../../../public/instructor/4.jpg'
import ins5 from '../../../public/instructor/5.jpg'
import ins6 from '../../../public/instructor/6.jpg'
import ins7 from '../../../public/instructor/7.jpg'
import ins8 from '../../../public/instructor/8.jpg'
import ins9 from '../../../public/instructor/9.jpg'

const Instructors = () => {
    return (
        <div className='md:grid md:grid-cols-3 my-32 gap-20'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins1} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: John Smith</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins2} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Emily Johnson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins3} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins4} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins5} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins6} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins7} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Remo</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins8} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={ins9} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Sarah Thompson</h2>
                    <p>Email: remo@desu.com</p>

                </div>
            </div>
        </div>

    );
};

export default Instructors;