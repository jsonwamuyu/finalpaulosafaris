import { Inter} from 'next/font/google'
import { Footer, BannerFooter, Navbar} from "@/components";
import Link from 'next/link';
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import "../globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paulosafaris Kenya",
  description:
    "Paulosafaris is a unique Kenya Tour Company based in Mombasa offering Kenya Coastal Beach Holidays, Adventures from Mombasa to Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo Safaris from Mombasa and Maasai Mara Tours. Our goal is to provide first class wildlife safaris to our client.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="w-full min-h-screen select-none">
          <Navbar />
          {children}
          <Link
            href={"https://wa.me/254710558659"}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed cursor-pointer flex items-center  justify-center bottom-[20px]  z-40 right-[10px] sm:right-[40px] bg-[#24d366] text-white rounded-full hover:opacity-80  shadow-lg h-[40px] w-[40px]">
            <BsWhatsapp className=" w-[22px] h-[22px]" />
          </Link>

          <Link
            href="https://www.facebook.com/paulosafariskenya/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed cursor-pointer flex items-center  justify-center bottom-[70px] z-40 right-[10px] sm:right-[40px] bg-[#3b5998] text-white rounded-full hover:opacity-80  shadow-lg h-[40px] w-[40px]">
            <BsFacebook className="w-[22px] h-[22px]" />
          </Link>
          <Footer />
          <BannerFooter />
        </main>
      </body>
    </html>
  );
}
