import Link from 'next/link';
import Adminlogo from '@/app/components/admin_logo';

const SignIn = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center mt-auto">
            <Adminlogo />
            <div className="text-center">
                <p className="text-4xl font-bold uppercase">Admin Login</p>
            </div>

            <div className="text-left mt-10 mx-8">
                <div>
                    <label htmlFor="username">Enter Email</label>
                    <input type="text" className="border border-gray-400 rounded-lg p-3 px-4 py-4 w-full" placeholder="Eg. kmensah123"/>
                </div>

                <div className="mt-5">
                    <label htmlFor="username">Enter Password</label>
                    <input type="password" className="border border-gray-400 rounded-lg p-3 px-4 py-4 w-full" placeholder="Your special code"/>
                </div>
                <Link href='/dashboard'>
                    <button className="rounded-md bg-primary hover:bg-primary-hovered text-white p-5 w-full mt-12 mb-3">Log in</button>
                </Link>
            </div>
        </div>
     );
}
 
export default SignIn;