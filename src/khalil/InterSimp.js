import React from "react";
import "./InterSimp.css";

function InterSimp() {
  return (
    <section className="section-impact ">
      <div className=" impact flexrowcenter">
        <div className="container impact-container">
          <div className="title-impact">
            <h2>Les Simplonien.nes à l’international</h2>
          </div>
          <div className="content-impact flexrowcenter">
            <div className="public-impact">
              <pre>
                apprenantes{"\n"}
                <span>621</span>
                {"\n"}
                personnes en situation de handicap{"\n"}
                <span>39</span>
                {"\n"}
                apprenantes ayant suivi des formations tech{"\n"}
                <span>519</span>
                {"\n"}
                personnes de moins de 25 ans{"\n"}
                <span>951</span>
                {"\n"}
                demandeur.ses d’emploi{"\n"}
                <span>1 476</span>
                {"\n"}
                personnes de plus de 45 ans{"\n"}
                <span>40</span>
                {"\n"}
                personnes avec un niveau de diplôme infra-bac ou bac (niveau 2
                ou 3){"\n"}
                <span>843</span>
                {"\n"}
              </pre>
            </div>

            <div className="en-total-impact ">
              <p>
                <span className="number">89% </span>sorties positives{" "}
                <span className="operators"> = </span> <br />
                <span class="number">71% </span> des sorties vers l'emploi{" "}
                <span class="operators"> + </span>{" "}
                <span class="number">9% </span> des sories vers
                l'entrepreneuriat <span class="operators"> + </span>{" "}
                <span class="number">9%</span> de sorties formation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterSimp;
