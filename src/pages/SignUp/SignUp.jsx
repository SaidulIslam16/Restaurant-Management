import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photourl;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                updateUserProfile(name, photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                    })
                    .catch(e => {
                        console.error(e)
                    })
                navigate('/')
            })
            .catch(e => {
                console.error(e)
            })
    }

    return (
        <>
            <Helmet>
                <title>Fork Fable | Signup</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUP Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name")} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="photourl" {...register("photourl")} name="photourl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Create Account" />
                            </div>
                        </form>
                        <div className="text-center pb-6">
                            <p>Already Have Account? <span className="font-bold text-orange-500"><Link to='/login'>Login Here</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;