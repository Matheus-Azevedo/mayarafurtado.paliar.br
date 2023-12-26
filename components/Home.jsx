import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <main class="home-container-1">
      <div class="home-container-2">
        <div>
          <h1>Mayara Furtado</h1>
          <p>
            GERONTOLOGIA E PALIATIVISMO
            <br />
            CREFITO: 217440-F
          </p>
        </div>
        <nav>
          <ScrollLink to="biography" smooth={true} duration={500}>
            <div>Biografia</div>
          </ScrollLink>
          <ScrollLink to="clinic" smooth={true} duration={500}>
            <div>Clínica</div>
          </ScrollLink>
          <ScrollLink to="depositions" smooth={true} duration={500}>
            <div>Depoimentos</div>
          </ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500}>
            <div>Contato</div>
          </ScrollLink>
        </nav>
      </div>
      <div class="home-container-3">
        <div class="home-photo" />
        <div>
          <h1>
            Me chamo
            <strong class="brown-paliar"> Mayara Furtado</strong>,<br />
            e sou sua Fisioterapeuta.
            <br />
            Como posso ajudá-lo?
          </h1>
          <p>
            Com mãos que curam, trago alívio e a cura da dor,
            <br />
            restaurando a qualidade de vida dos meus pacientes.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
