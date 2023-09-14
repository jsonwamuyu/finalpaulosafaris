import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter, BsPinterest, BsInstagram, BsTiktok} from 'react-icons/bs';
import { HiMail, HiPhone } from "react-icons/hi";


const Banner = () =>{
    return (
      <section className="w-full sm:flex hidden bg-gradient-to-r from-[#29AB87] to-[#ffc15c]">
        <div
          className="text-white flex gap-4 items-center justify-between font-medium py-[2px]
              w-full max-w-7xl px-4 lg:px-8 mx-auto">
          <div className="flex items-center justify-start gap-4 w-full text-sm">
            <p className="flex items-center justify-center gap-1 ">
              <HiPhone size={12} />
              +254710558659 <span>|</span> +254720484862
            </p>
            <p className="flex items-center justify-center gap-1">
              <HiMail size={12} />
              paul_otti@yahoo.com
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 items-center justify-center">
            <Link
              href="https://pinterest.com/paulosafaris/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#e60023] hover:opacity-70  flex items-center justify-center h-4 w-4 rounded-full">
              <BsPinterest size={10} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/paul-otieno-294689136/"
              className="hover:opacity-70 text-white bg-[#0077b5] h-4 w-4 flex items-center justify-center  rounded-full"
              target="_blank"
              rel="noopener noreferrer">
              <BsLinkedin size={10} />
            </Link>
            <Link
              href="https://www.twitter.com/PauloSafaris"
              className="hover:opacity-70 text-white bg-[#00acee] h-4 w-4 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitter size={10} />
            </Link>
            <Link
              href="https://www.instagram.com/paulosafaris"
              className="hover:opacity-70 text-white bg-[#e1306c] h-4 w-4 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsInstagram size={10} />
            </Link>
            <Link
              href="https://www.facebook.com/paulosafariskenya/"
              className="hover:opacity-70 text-white bg-[#3b5998] h-4 w-4 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsFacebook size={10} />
            </Link>
            <Link
              href="https://www.tiktok.com/paulosafaris"
              className="hover:opacity-70 text-white bg-[#fe2c55] h-4 w-4 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsTiktok size={10} />
            </Link>
          </div>
        </div>
      </section>
    );
}
export default Banner;