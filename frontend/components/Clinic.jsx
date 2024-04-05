function Clinic() {
  return (
    <main class="clinic-container-1">
      <div class="clinic-container-2">
        <h1>SERVIÇOS</h1>
        <ul>
          <li>Reabilitação Cardiopulmonar</li>
          <li>Reabilitação Oncológica</li>
          <li>Tratamento da Dor</li>
          <li>Massagem Relaxante</li>
          <li>Drenagem Linfática</li>
        </ul>
      </div>
      <div class="clinic-container-3">
        <h1>Clínica do Idoso</h1>
        <li className="clinic-place" />
        <p>
          Localizado na OncoVida Especialidades Av. Mato Grosso, 183 - Estados,
          João Pessoa - PB, 58030-080
        </p>
        <li className="clinic-oncovida" />
      </div>
      <div class="clinic-container-4">
        <h1>ATENDIMENTO</h1>
        <ul>
          <li>Particular</li>
          <li className="clinic-geap-logo" />
          <li className="clinic-prevmed-logo" />
        </ul>
      </div>
    </main>
  );
}

export default Clinic;
