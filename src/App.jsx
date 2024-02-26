import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <img src="logo.png" alt="C.R.I. fluid systems logo image" className="logoImg" />
      </header>

      <section className="mainSection">
        <article className="article">
          <img src="src/assets/1.png" alt="" className="trophyImg" />
          
          <main className="main">
            <h1 className="heading">{`C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.`}</h1>
            
            <ul className="mainList">
              <li>{`C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.`}</li>
              <li>{`C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.`}</li>
            </ul>

            <img src="src/assets/2.png" alt="" className="awardImg" />
            <p className="imgDes">
              {`Government of India has awarded the `}
              <span>{`"National Energy Conservation Award 2018"`}</span>
              {`. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.`}
            </p>
          </main>
        </article>

        <div className="productsWrapper">
          <h2 className="productsHeading">{`INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.`}</h2>
          <img src="src/assets/3.png" alt="" className="productsImg" />
          <p className="productsName">{`Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors`}</p>
        </div>

        <div className="categoryWrapper">
          <h3 className="categoryHeading">{`C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS`}</h3>
          <ul className="categoryList">
            <li>CHEMICALS & PROCESS</li>
            <li>POWER</li>
            <li>WATER & WASTE WATER</li>
            <li>OILS & GAS</li>
            <li>PHARMA</li>
            <li>SUGARS & DISTILLERIES</li>
            <li>PAPER & PULP</li>
            <li>MARINE & DEFENCE</li>
            <li>METAL & MINING</li>
            <li>FOOD & BEVERAGE</li>
            <li>PETROCHEMICAL & REFINERIES</li>
            <li>SOLAR</li>
            <li>BUILDING</li>
            <li>HVAC</li>
            <li>FIRE FIGHTING</li>
            <li>AGRICULTURE & RESIDENTIAL</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <ul className="links">
          <li>
            <a href="tel:1800-200-1234">
              <img src="src/assets/phone-icon.svg" alt="" />
              <p>
                {`Toll free `}
                <span>{`1800 200 1234`}</span>
              </p>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/cripumps">
              <img src="src/assets/facebook-icon.svg" alt="" />
              <p>{`www.facebook.com/cripumps`}</p>
            </a>
          </li>

          <li>
            <a href="https://www.crigroups.com">
              <img src="src/assets/website-icon.svg" alt="" />
              <p>{`www.crigroups.com`}</p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
