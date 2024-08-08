import Image from "next/image";

export default function Home() {
  return (
    <>
        <nav className="absolute top-0 left-0 bg-black w-full z-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="text-white">Gerrard</a>
                </div>
              </div>
              <div className="md-block">
                <div className="ml-4 flex items-center space-x-4">
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Home</a>
                  <a href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> About Me</a>
                  <a href="/talents" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Talents and Interests</a>
                  <a href="/projects" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Projects</a>
                  <a href="/skills" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Skills</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="text-center">
          <Image
            src="/images/gerrardsss.png"
            alt="Picture of the author"
            width={1200}
            height={1000}
            className="h-lvh w-screen"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-sans text-2xl text-white pb-4">Hello, I'm </h3>
            <h1 className="font-sans font-bold text-6xl text-white">Samuel Gerrard Hamonangan Girsang</h1>
          </div>
        </div>
    </>
  );
}