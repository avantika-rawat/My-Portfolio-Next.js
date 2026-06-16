import BlobImage from "./Blob";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-20">
    <Navbar/>
    <section className="h-[80%] flex flex-col md:flex-row items-center justify-center gap-10 px-6">
   
      
      <BlobImage />

      <div className="max-w-xl text-center md:text-left">
       <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-[0.2em] scale-x-125 origin-left">
  AVANTIKA <br />
  RAWAT
</h1>
        <p className="mt-4 text-gray-600">
          Full-Stack Web Developer building modern, scalable web apps.
        </p>
      </div>

    </section>
    </div>
  );
}
