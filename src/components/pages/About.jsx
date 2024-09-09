import React from "react";
import "../../App.css";
import Characters from "../Characters";
import Footer from "../Footer";
import video from "../../videos/video1.MP4";

function About() {
  return (
    <>
      <div className="about">
        <h1>AUTHENTICITY</h1>
        <div id="research">
          <div id="research-text">
            <p>
              Everything in this film is true. Care and diligence has been taken
              to recreate all events, locations and conversations as accurately
              as possible.
            </p>{" "}
            <p>
              Many hours spent with Ivor Perl BEM discussing his first hand
              testimony, cross referenced with the books of Primo Levi, Elie
              Wiesel, and József Debreczeni [all at Auschwitz around the same
              time] informed the writing of the screenplay.{" "}
            </p>{" "}
            <p>
              Knowledge and layouts of locations were enhanced by research trips
              to Auschwitz, Dachau, Allach, Kaufering IV, Walnuss II and Munich,
              guided by historians, taxi drivers and locals.
            </p>{" "}
            <p>
              Holocaust artist David Olère’s visual descriptions of the
              Sonderkommando informed Zoom’s understanding of the workings of
              the crematoriums, leading him to include Olère himself in those
              scenes alongside Ivor’s older brother, David.
            </p>{" "}
            <p>
              With Ivor’s blessing, Zoom included his own great-great-uncle,
              Lazar Rozenwajn in an early death camp scene. Lazar was imprisoned
              at Auschwitz and liberated from Dachau the same day as Ivor.
            </p>
          </div>
          <div id="research-video">
            <video src={video} controls></video>
          </div>
        </div>

        <h1>CHARACTERS</h1>

        <div id="characters">
          <div id="puppets-image"></div>
          <p>
            Zoom Rockman created all the puppets using reference photographs,
            documented film footage and survivor art. Where these were not
            available he used detailed descriptions from Ivor himself.
          </p>
          <p>
            Each person below described as ‘unknown’ is someone we have not been
            able to name. If you have any information regarding their identity
            please get in touch using the contact page of this site.
          </p>
          <Characters />
        </div>

        <h1>SYNOPSIS</h1>
        <div className="synopsis">
          <p>
            Ivor is 12 when the Nazis march into his village in Hungary. His
            father and eldest brother are immediately sent to a labour battalion
            and the remaining family, to the ghetto, where they are eventually
            rounded up, herded to the station and pushed onto cattle trucks. On
            arrival at Auschwitz, his mother insists he leaves his sisters and
            younger siblings and stands with his two older brothers. Told to say
            he is sixteen, he makes the selection alongside them. In the shower
            blocks, he is disinfected, shaved, uniformed, given a number and
            marched to a barracks where his eldest brother is taken to work in
            the crematorium.{" "}
          </p>
          <p>
            {" "}
            Ivor and his remaining brother, Alec spend the next 6 months
            witnessing the full horror of Birkenau. Soon after Ivor and Alec are
            miraculously reunited with their father, they are sent on another
            cattle truck to Kaufering IV where they are all put to work at
            Walnuss II. When Father and Alec are taken away at roll call, Ivor
            reaches his lowest point and by the time Alec returns 3 weeks later,
            he has contracted Typhus. Near to death, he is carried from the sick
            barracks by his brother.{" "}
          </p>
          <p>
            {" "}
            Realising the war is almost lost, a Nazi officer is ordered to lead
            them on a death march and kill them in the mountains. Fearing he
            will be tried for war crimes, he delivers them alive to Allach 6
            days later. When an artillery shell destroys part of the fence, they
            escape into the woods and hide out in an abandoned hut. American
            soldiers break in looking for Nazis and explain the war is over and
            they must go to Dachau which has been liberated. Once there, they
            clean up and are given fresh clothes and food. After finding out
            they are the only survivors in the family, Ivor sneaks onto a bus to
            Munich and into a cinema where he sees his first-ever film. On a
            second trip, he is arrested and accused of black marketeering.
            Appearing in court the judge is shown his Dachau papers and allows
            him to go free. Ivor and Alec are sent to Feldafing, the camp for
            displaced persons. They attend a Kol Nidre service and light
            memorial candles. Being the youngest, they are soon put on a plane
            to the UK.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
