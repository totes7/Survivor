import React from "react";
import "../../App.css";
import Footer from "../Footer";
import erran from "../../images/ErranProfile.jpg";
import video from "../../videos/video1.MP4";

function Info() {
  return (
    <>
      <div className="info">
        <h1>TEAM</h1>
        <div className="info-team">
          <p>
            Zoom Rockman <span>Director</span>
          </p>
          <p>
            Kate Lennard <span>Screenwriter</span>
          </p>
          <p>
            Sally Vaughan <span>Producer</span>
          </p>
          <p>
            Nigel Canin <span>Executive Producer</span>
          </p>
          <p>
            Rachel Mansson <span>Marketing and Distribution</span>
          </p>
        </div>

        <h1>MUSIC</h1>

        <div id="music">
          <div id="music-text">
            <p>
              Music for the first third of the film, set in Hungary, is
              traditional Yiddish Folk, developing into an ominous Talmudic
              chant as the Nazi invasion unfolds only to end abruptly, when the
              cattle truck doors are bolted shut. As they’re unbolted again at
              Auschwitz, the second section begins. Blood pumping in ears, panic
              attack sounds slowly evolving into an industrial soundscape as we
              follow the new inmates’ metamorphosis into slave labour robots
              through a full spectrum of Holocaust indignities, revealed in
              rapid succession. The final crescendo and eventual escape through
              the perimeter fence is accompanied by the exhilarating, rebellious
              sound of Motorcade By Magazine (Post Punk band from 1978). This
              section ends with a door being kicked in and the abrupt end of
              WW2. Section three begins with silence and then the sound of
              nature. Emotional, threatening, but hopeful. We hear the sounds of
              the Hebrew mourners’ prayers getting louder and eventually
              transforming into the joyous sound of 1950’s Brick Lane, British,
              Yiddish Jazz.{" "}
            </p>
          </div>
          <div id="music-image">
            <img src={erran} alt="Erran Baron Cohen" />
          </div>
          <div id="music-profile">
            <p>
              {" "}
              Erran Baron Cohen is composing ‘Ivor’s Theme’ to be woven
              throughout the film and used to denote any emotional highs and
              lows. Erran Baron Cohen is an award winning composer whose work
              has encompassed film and television scores, album releases,
              orchestral commissions and musical theatre. His knowledge of
              contemporary classical, electronic and world music makes him an
              extremely versatile composer able to turn his talents to a wide
              variety of eclectic projects. Erran has received numerous Composer
              Awards for his scores to Borat, Bruno and The Dictator and his
              song Wuhan Flu was Oscar shortlisted.
            </p>
          </div>
        </div>

        <h1>RESEARCH</h1>
        <div id="research">
          <div id="research-text">
            <p>
              All characters have been developed using photographs of Ivor’s
              family and anonymous victims of the Holocaust. Each soul depicted
              is based on a real person, respectfully brought back to life in
              puppet form. This includes Zoom’s own great-great-uncle, Lazar
              Rozenwajn, who was imprisoned at Auschwitz and liberated from
              Dachau on the same day as Ivor. Holocaust artist David Olère’s
              visual descriptions of the Sonderkommando informed Zoom’s
              understanding of the workings of the crematoriums, leading him to
              include Olère himself in these scenes. Knowledge and layouts of
              locations have been enhanced by research trips to Auschwitz,
              Dachau, Allach, Kaufering IV, and Walnuss II, guided by
              historians. Testimony from Ivor has been crossreferenced with the
              books of Primo Levi, Elie Wiesel, and József Debreczeni, who were
              also at Auschwitz around the same time. Later this year, Zoom will
              travel to Mako, Hungary, to see where Ivor lived with his parents
              and siblings. From there, he will take a train to Szeged and see
              the scenery the family travelled through on their first cattle
              truck journey to Auschwitz.
            </p>
          </div>
          <div id="research-image-one">
          </div>
          <div id="research-image-two">
          </div>
          <div id="research-image-three">
          </div>
          <div id="research-video">
            <video src={video} controls></video>
          </div>
        </div>

        <h1>ASPIRATIONS</h1>
        <div className="info-aspirations">
          <p>
            This film hopes to join the ranks of the most significant Holocaust
            films ever made. By utilising a distinctive animation style with
            paper puppet characters and scenery derived from archival material,
            we aim to vividly depict the physical and emotional realities of the
            Holocaust based on thoroughly researched, fact-checked primary
            source testimonies.
          </p>
          <p>
            Our goal is to engage deeply, surprise, and touch the audience as
            they follow Ivor, an ordinary boy, through his journey of love,
            loss, fear, joy, excitement, despair, confusion, shame, happiness
            and courage. We intend for this film to reach a wide audience, spark
            meaningful debate and discussion, and be recognised as a vital
            creative expression of humanity's fragility, preserved for current
            and future generations.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Info;
