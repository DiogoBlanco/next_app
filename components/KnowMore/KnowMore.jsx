import "./styles.css";
import KnowMoreBtn from "../KnowMoreBtn/KnowMoreBtn";

export default function KnowMore() {
  return (
    <div class="know-more">
      <div class="main-title">
        <h1>Protegendo você contra ataques cibernéticos</h1>
        <p class="main-p">
          Seja qual for o tamanho da sua empresa, oferecemos soluções de
          segurança personalizadas
        </p>
        <KnowMoreBtn />
      </div>
    </div>
  );
}
