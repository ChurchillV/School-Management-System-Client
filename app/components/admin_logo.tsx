import Image from "next/image";
import RMS_Logo from "../../public/images/RMS_Logo.svg";

const Adminlogo = () => {
    return ( 
        <div className="rounded-full p-10 my-5 mx-5 text-center flex flex-col items-center">
            <Image src={RMS_Logo} alt='Logo' height={100} width={100} />
            <p className="font-bold text-lg">Domitech RMS</p>
        </div> 
     );
}
 
export default Adminlogo;