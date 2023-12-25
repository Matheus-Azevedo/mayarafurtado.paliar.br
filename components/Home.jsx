import Link from "next/link";

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
          <Link href="#home">
            <div>Home</div>
          </Link>
          <Link href="#biography">
            <div>Biografia</div>
          </Link>
          <Link href="#clinic">
            <div>Clínica</div>
          </Link>
          <Link href="#contacts">
            <div>Contato</div>
          </Link>
        </nav>
      </div>
      <div class="home-container-3">
        <div class="home-photo"></div>
        <div>
          <h1>
            Me chamo
            <strong class="brown-paliar">Mayara Furtado</strong>,<br />
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
