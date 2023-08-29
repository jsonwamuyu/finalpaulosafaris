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
              href="https://www.linkedin.com/in/paul-otieno-294689136/"
              className="hover:opacity-60 text-[#0077b5]"
              target="_blank"
              rel="noopener noreferrer">
              <BsLinkedin size={12} />
            </Link>
            <Link
              href="https://www.twitter.com/paulosafaris"
              className="hover:opacity-60 text-[#00acee]"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitter size={12} />
            </Link>
            <Link
              href="https://www.instagram.com/PauloSafaris"
              className="hover:opacity-60 text-[#e1306c]"
              target="_blank"
              rel="noopener noreferrer">
              <BsInstagram size={12} />
            </Link>
            <Link
              href="https://www.facebook.com/paulosafariskenya/"
              className="hover:opacity-60 text-[#3b5998]"
              target="_blank"
              rel="noopener noreferrer">
              <BsFacebook size={12} />
            </Link>
            <Link
              href="https://www.tiktok.com/paulosafaris"
              className="hover:opacity-60 text-[#fe2c55]"
              target="_blank"
              rel="noopener noreferrer">
              <BsTiktok size={12} />
            </Link>
            <Link
              href="https://pinterest.com/paulosafaris/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e60023] hover:opacity-60">
              <BsPinterest size={12} />
            </Link>
          </div>
        </div>
      </section>
    );
}
export default Banner;