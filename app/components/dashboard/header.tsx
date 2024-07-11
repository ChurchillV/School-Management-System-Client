import ProfilePhoto from "../../../public/images/sample_profile.jpg";
import Image from "next/image";

const Header = () => {
    return ( 
        <div className="flex flex-row justify-between items-center rounded-lg p-5 px-12 m-3">
            <div className="text-5xl font-semibold">
                Dashboard
            </div>
            <div className="flex flex-row gap-3">
                <div>
                    <Image src={ProfilePhoto} alt="Profile photo" height={80} width={80} className="rounded-full" />
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-bold">
                        Jason Sakyi
                    </div>
                    <div className="text-md font-normal text-slate-500">
                        jsakyi@gmail.com
                    </div>
                    <div className="text-sm font-light text-slate-500">
                        Administrator
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;