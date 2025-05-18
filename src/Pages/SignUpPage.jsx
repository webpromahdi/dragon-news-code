import { useContext, useState } from 'react';
import { FaGoogle, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUpPage = () => {

  const [errorMessage, setErrorMessage] = useState(''); 
  const {createNewUser, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const passowrd = form.passowrd.value;
        setErrorMessage('');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(passowrd)){
          setErrorMessage("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*)");
          return;
        }

        createNewUser(email, passowrd)
        .then((userCredential) =>{
            const user = userCredential.user;
            setUser(user);
            navigate("/");
        })
        .catch(err =>{
            setErrorMessage(err.message);
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
            <p className="text-sm text-gray-500 mb-6">Be the first to know. Join now.</p>

            <div className="flex space-x-4 mb-6">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                <FaGoogle />
                <span>Sign up with Google</span>
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
              <span className="mx-4 text-gray-400">Or create account with email</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  name='name'
                  type="text"
                  placeholder="Full Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  type="text"
                  name='userName'
                  placeholder="Username"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <input
                type="email"
                name='email'
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="password"
                name='passowrd'
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <div className="flex items-start text-sm text-gray-600">
                <input type="checkbox" className="mr-2 mt-1" />
                <p>
                  By creating account means you agree to the
                  <a href="#" className="text-blue-600 hover:underline ml-1">Terms and Conditions</a>, and our
                  <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>
                </p>
              </div>

              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition font-semibold">
                Create Account
              </button>
            </form>

            {
              errorMessage && <p className='my-2 text-red-500'>{errorMessage}</p>
            }

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?
                <Link to="/auth/login" className="text-blue-600 hover:underline ml-1">Sign In</Link>
            </p>
          </div>
        </div>
    );
};

export default SignUpPage;