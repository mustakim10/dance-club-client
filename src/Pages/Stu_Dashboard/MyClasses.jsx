import { FaTrashAlt } from "react-icons/fa";
import useSelectedClass from "../../Hooks/useSelectedClass";

const MyClasses = () => {
    const [selected] = useSelectedClass();

    const total = selected.reduce((sum, cls) => cls.price + sum, 0);
    return (
        <div>
           <div className="uppercase font-semibold h-[60px] flex justify-center items-center gap-20">
           <h2 className="text-3xl">Total-sel. classes : {selected.length}</h2>
            <h2 className="text-3xl">Total Cost : {total}</h2>
            <button className="btn btn-warning btn-sm">PAY</button>
           </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        selected.map((item, index) => <tr
                        key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                
                            </td>
                            <td>{item.name}   </td>
                            <td>{item.instructor}</td>
                            <td>
                                $ {item.price}
                            </td>
                            <td>
                               <button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                        }
                        
                       
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyClasses;