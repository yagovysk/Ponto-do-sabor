import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import "../../App.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-icons">
        <a
          href="https://www.instagram.com/ponto.dosaborpizzaria?igsh=cGV5bnVqeWg1Ympn"
          target="blank"
        >
          <FaInstagramSquare className="footer-icon" />
        </a>
        <a
          href="https://wa.me/+5561981326059?text=Olá, vim pelo site, gostaria de saber das pizzas e hambúrgueres."
          target="blank"
        >
          <FaWhatsappSquare className="footer-icon" />
        </a>
      </div>
      <h3>&#169; Todos os Direitos Reservados ao Ponto do Sabor</h3>
      <a
        className="tgv-button"
        aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
        href="https://togyrogroupvictory.com/"
        target="blank"
      >
        Desenvolvido por Togyro <span>Group</span> Victory
      </a>
    </footer>
  );
}
