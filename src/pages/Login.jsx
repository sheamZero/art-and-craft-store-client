import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { loginUsingEmailPass, loginUsingGoogle, loginUsingGithub } = useContext(AuthContext);

    const onSubmit = e => {
        const { email, password } = e;
        loginUsingEmailPass(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state)
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error'
                })
            })
    };

    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then(result => {
                navigate(location.state)
                console.log(result);
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error'
                })
            })
    };

    const handleGithubLogin = () => {
        loginUsingGithub()
            .then(result => {
                navigate(location.state)
                console.log(result);
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error'
                })
            })
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'At least 6 characters required' },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="my-4 text-center text-gray-500">or login with</div>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        <FaGoogle /> Google
                    </button>
                    <button
                        onClick={handleGithubLogin}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                        <FaGithub /> GitHub
                    </button>
                </div>

                <p className="mt-6 text-sm text-center">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
