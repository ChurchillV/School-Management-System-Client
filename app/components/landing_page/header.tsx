const Header = () => {
    return ( 
        <div className="flex justify-between items-center border-b border-b-blue-400 px-5 py-5">
            <div className="lg:text-2xl sm:text-xl font-extrabold">
                DomiTech S.M.S
            </div>

            <div className="lg:flex hidden">
                <div className="mr-4">Home</div>
                <div className="mr-4">Learn More</div>
                <div className="mr-4">Contact Us</div>
            </div>
        </div>
     );
}
 
export default Header;