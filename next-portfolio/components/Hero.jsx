import Blob from "./Blob";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      
      {/* <Blob /> */}

      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-600">Avantika</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Full-Stack Web Developer building modern, scalable web apps.
        </p>
      </div>

    </section>
  );
}
