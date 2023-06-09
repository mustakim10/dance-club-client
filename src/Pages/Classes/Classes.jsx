
import SingleClass from "../SingleClass/SingleClass";
import { Helmet} from 'react-helmet-async';
import useClasses from "../../Hooks/useClasses";

const Classes = () => {
    const [classes] = useClasses();
    
    return (
        <div>
            <Helmet>
                <title>
                    Dance Club | Classes
                </title>
            </Helmet>
             <h2 className='text-4xl my-16 font-bold text-center'>Our Classes: {classes.length}</h2>
            <div className='md:grid md:grid-cols-3 my-32 gap-20'>
            {
                classes.map(cls => <SingleClass
                    key={cls._id}
                    cls={cls}
                    ></SingleClass>)
             }
            </div>
        </div>
    );
};

export default Classes;