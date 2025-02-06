import "../../App.css";

export function Sobre() {
  return (
    <section className="flex flex-col justify-center items-center py-8 px-6 gap-6 bg-[#0f1c37]">
      <h2 className="text-4xl md:text-5xl font-lobster text-white text-center">
        Sobre Nós
      </h2>

      <h3 className="font-sans text-center text-white max-w-[90%] md:max-w-[700px] text-lg md:text-xl leading-relaxed">
        Nem tudo termina bem, mas tudo pode começar de forma deliciosa, não é?
        Aqui no Ponto do Sabor, acreditamos que uma boa pizza faz toda a
        diferença! Foi com essa paixão que Marcos Monteiro da Silva criou nossa
        pizzaria, combinando amor, carinho e muito sabor em cada receita. Nosso
        compromisso é levar até você pizzas de qualidade, sempre com preços
        justos e um atendimento que faz você se sentir em casa.
      </h3>

      <p className="font-sans text-white max-w-[90%] md:max-w-[700px] text-lg text-center">
        🍕 Ponto do Sabor – onde cada fatia conta uma história de sabor e
        dedicação!
      </p>

      <a
        href=""
        className="font-sans bg-white text-[#0f1c37] text-lg py-3 px-6 rounded-md w-full max-w-[300px] text-center transition-all hover:bg-[#b1bde0] hover:scale-105"
      >
        Entre em contato conosco!
      </a>
    </section>
  );
}
