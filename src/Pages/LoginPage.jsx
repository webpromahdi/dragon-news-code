import { useContext, useState } from 'react';
import { FaGoogle, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(''); 
  const {signInUser, setUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage('');

    signInUser(email, password)
    .then(res =>{
      const user = res.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    })
    .catch(err =>{
      setErrorMessage(err.message);
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h2>
        <p className="text-sm text-gray-500 mb-6">Welcome back. We've missed you.</p>
        
        <div className="flex space-x-4 mb-6">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaGoogle />
            <span>Sign in with Google</span>
          </button>
          <button className="p-2 rounded-md bg-blue-400 hover:bg-blue-500 text-white transition">
            <FaTwitter />
          </button>
          <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition">
            <FaFacebookF />
          </button>
        </div>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-400">Or sign in with email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition font-semibold">
            Sign In
          </button>
        </form>

        {
          errorMessage && <p className='my-2 text-red-500'>{errorMessage}</p>
        }

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <Link to="/auth/register" className="text-blue-600 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
