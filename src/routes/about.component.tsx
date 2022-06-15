const About = () => {
  return (
    <section className="text-gray-700 mt-20">
      <h2 className="text-4xl lg:text-6xl text-center mb-2 font-bold">
        Tailwind Video I've Done
      </h2>

      <div className="flex flex-col md:flex-row items-start bg-gray-900 p-10">
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start w-full text-left">
          <h1 className="text-3xl lg:text-4xl text-center lg:text-left font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            About me
          </h1>

          <p className="mt-3 mb-16 md:mb-0 text-gray-500 max-w-xl xl:leading-relaxed md:text-base">
            Hey there! My name is John Smith and I make videos on Web
            development. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rerum quod dicta cumque itaque corporis autem error
            perspiciatis consequatur omnis, a aperiam repellat deleniti ut non,
            eum excepturi corrupti voluptates blanditiis!
          </p>
        </div>

        {/* Right section */}
        <div className="relative w-full max-w-xl">
          <p className="mb-2 text-gray-500 text-base">
            I did a tailwind video for my YouTube Channel
          </p>

          <iframe
            className="w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yAoLSRbwxL8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
