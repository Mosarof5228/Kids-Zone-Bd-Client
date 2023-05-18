import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../assets/image/signupimg1.avif'
import { AuthContext } from '../../providers/AuthProvider';
const Registration = () => {
    const { makeUser } = useContext(AuthContext)
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.photo.value;
        console.log(name, email, password, url)
        makeUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateImage(user, name, url)
                form.reset


            })
            .catch(error => {
                console.log(error)
            })

    }

    const updateImage = (user, name, url) => {
        updateProfile(user, {
            displayName: name, photoURL: url
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            console.log(error)
        });



    }

    return (
        <div className="hero  bg-base-200 mt-4">
            <div className="hero-content flex-col  lg:flex-row my-11">
                <div className="w-1/2 mr-12">
                    <img className='rounded-2xl' src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Registration</h1>
                        <form onSubmit={handleRegistration}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp " />
                            </div>
                            <p className='text-center'><small>Already Have an Account? <Link to='/login' className='text-orange-600  '>LogIn Please</Link> </small></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;