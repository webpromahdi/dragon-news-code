import { FaGoogle, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
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

            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="password"
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

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?
                <Link to="/auth/login" className="text-blue-600 hover:underline ml-1">Sign In</Link>
            </p>
          </div>
        </div>
    );
};

export default SignUpPage;