import type { NextPage } from "next";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage: NextPage = () => {
  const Images: string[] = [
    "https://images.pexels.com/photos/13922583/pexels-photo-13922583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3611396/pexels-photo-3611396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/11032489/pexels-photo-11032489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2260956/pexels-photo-2260956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3793772/pexels-photo-3793772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <section className=" sm:grid place-items-center h-svh sm:h-screen bg-slate-200">
      <main className=" w-full sm:w-[500px] h-60 sm:h-80 bg-white relative shadow-lg shadow-slate-400">
        <Image
          src={
            "https://images.pexels.com/photos/3793772/pexels-photo-3793772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          fill
          className="z-[1]"
        />
        <button className="z-10 absolute top-1/2 left-8 size-8 grid place-items-center rounded-full bg-white/10  text-white/40 border border-white/35 backdrop-blur-lg">
          <ChevronLeft size={18} />
        </button>
        <button className="z-10 absolute top-1/2 right-8 size-8 grid place-items-center rounded-full bg-white/10  text-white/40 border border-white/35 backdrop-blur-lg">
          <ChevronRight size={18} />
        </button>
      </main>
    </section>
  );
};

export default HomePage;
