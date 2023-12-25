import Biography from "../components/Biography";
import Clinic from "../components/Clinic";
import Contacts from "../components/Contacts";
import Depositions from "../components/Depositions";
import Home from "../components/Home";

function LandingPage() {
  return (
    <div>
      <section
        id="home"
        className="bg-gradient-to-r from-greenLight-paliar to-white h-screen"
      >
        <div className="logo logo-right" />
        <Home />
      </section>
      <section
        id="biography"
        className="bg-gradient-to-r from-greenLight-paliar to-white h-screen"
      >
        <div className="logo logo-left" />
        <Biography />
      </section>
      <section
        id="clinic"
        className="bg-gradient-to-r from-greenLight-paliar to-white h-screen"
      >
        <div className="logo logo-center" />
        <Clinic />
      </section>
      <section
        id="depositions"
        className="bg-gradient-to-r from-greenLight-paliar to-white h-screen"
      >
        <div className="logo logo-right" />
        <Depositions />
      </section>
      <section
        id="contacts"
        className="bg-gradient-to-r from-greenLight-paliar to-white h-screen"
      >
        <div className="logo logo-left" />
        <Contacts />
      </section>
    </div>
  );
}

export default LandingPage;
