
const SingleClass = ({ cls }) => {
    const {image,name,instructor,category,available_seats,price} = cls;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-xl text-slate-300font-semibold">Ins. Name :  {instructor}</h2>
                    <p>Available seats : {available_seats}</p>
                    <p>Price : ${price}</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;