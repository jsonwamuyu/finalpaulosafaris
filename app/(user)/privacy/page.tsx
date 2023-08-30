import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Privacy Policy - paulosafaris",
    description:"."
}

export default function Privacy(){
    return (
      <section className="w-full min-h-screen">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <h2 className="text-4xl">Privacy Policy.</h2>
          <div className="w-full"></div>
        </div>
      </section>
    );
}
