import { useEffect, useState } from "react";
import SingleClass from "../SingleClass/SingleClass";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    } ,[])
    return (
        <div>
             <h2 className='text-4xl my-16 font-bold text-center'>Our Classes: {classes.length}</h2>
            <div className='md:grid md:grid-cols-3 my-32 gap-20'>
            {
                classes.map(cls => <SingleClass
                    key={cls.available_seats}
                    cls={cls}
                    ></SingleClass>)
             }
            </div>
        </div>
    );
};

export default Classes;