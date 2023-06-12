import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiousSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const [axiosSecure]= useAxiosSecure();
    const { register, handleSubmit, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
const {available_seats,image,instructor,name,price} = data;
const newClass = {available_seats,instructor,name,price: parseFloat(price),image:imgURL};
           
            
            axiosSecure.post('/classes', newClass)
            .then(data => {
                console.log('after posting new class ', data.data)
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
};

console.log(img_hosting_token)
    return (
        <div className="w-full p-8">
            <h2 className="text-2xl font-semibold">Add a new class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Type Class name" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" {...register("instructor", { required: true, maxLength: 60 })} placeholder="Type Instructor" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seat</span>
                    </label>
                    <input type="number" {...register("available_seats", { required: true })} placeholder="Type Available seat" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type Price" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a image </span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
   <input className="btn btn-neutral btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;