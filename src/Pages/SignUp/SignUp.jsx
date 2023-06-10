import { Link, useNavigate } from "react-router-dom";
import login from '../../../public/xtra/login.jpg'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, handleSubmit, reset,  formState: { errors } } = useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .catch(error => console.log(error))
        })
    };

    

    
    return (
        <div className='my-12'>
            <Helmet>
                <title>
                    Dance Club | signUp
                </title>
            </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name",{ required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photoURL")} name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",{ 
                                required: true,
                                minLength: 6 ,
                                 maxLength: 20,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                  })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be have one upper case , one lower case, one number and one special character</p>}


                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </div>
                    </form>
                    <p className="m-8"><small>Already have an account ! <Link to="/login">Please Login</Link></small></p>
                </div>
            </div>
        </div>
    </div>
);
}

export default SignUp;