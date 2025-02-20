import "../../App.css";
import video from "../../assets/background-home.mp4";

export function Home() {
  return (
    <section className="relative w-full h-[50vh] md:h-screen flex justify-center text-white">
      <video
        className="absolute top-0 left-0 w-full object-cover md:h-screen h-[50vh]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <h1 className="relative lobster-css text-4xl md:text-6xl text-center px-4 py-30">
        Bem-vindo ao Ponto do Sabor 🍕
      </h1>
    </section>
  );
}
