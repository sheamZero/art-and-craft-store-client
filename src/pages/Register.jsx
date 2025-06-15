import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { registerUsingEmailPass } = useContext(AuthContext);

    const onSubmit = (data) => {

        const { name, email, password, photoURL } = data;

        //Password validation
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpper || !hasLower || !isValidLength) {
            return Swal.fire('Error', 'Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.', 'error');
        }
        else {
            registerUsingEmailPass(email, password)
                .then(result => {
                    // update userName and PhotoUrl
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoURL
                    })

                    Swal.fire({
                        title: "Success!",
                        text: 'Success create an user.',
                        icon: "success",

                    });
                    navigate(location.state);
                    console.log(result);
                })
                .catch(err => console.log(err.message))
        }


    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create a New Account</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium">Photo URL</label>
                        <input
                            type="url"
                            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                            {...register('photoURL', { required: 'Photo URL is required' })}
                        />
                        {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Minimum 6 characters' },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
