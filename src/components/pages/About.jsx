import React from "react";
import "../../App.css";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="about">
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
            to the UK. Ivor, now 92, appears on screen in live action.
          </p>
        </div>

        <h1>ASPIRATIONS</h1>
        <div id="aspirations">
          <div id="aspirations-image"></div>
          <div id="aspirations-text">
            <p>
              This film hopes to join the ranks of the most significant
              Holocaust films ever made. By utilising a distinctive animation
              style with paper puppet characters and scenery derived from
              archival material, we aim to vividly depict the physical and
              emotional realities of the Holocaust based on thoroughly
              researched, fact-checked primary source testimonies.
            </p>
            <p>
              Our goal is to engage deeply, surprise, and touch the audience as
              they follow Ivor, an ordinary boy, through his journey of love,
              loss, fear, joy, excitement, despair, confusion, shame, happiness
              and courage. We intend for this film to reach a wide audience,
              spark meaningful debate and discussion, and be recognised as a
              vital creative expression of humanity's fragility, preserved for
              current and future generations.
            </p>
          </div>
        </div>

        <h1>MUSIC</h1>

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

        {/* <h1>CHARACTERS</h1>

        <div id="characters">
          <div id="characters-image"></div>
          <div id="characters-text">
            <p>
              We follow 12-year-old Ivor Perl from a small town in Hungary to
              the gates of Auschwitz, Kaufering, Allach, and Dachau, witnessing
              the unspeakable horrors of the Holocaust. From being herded onto a
              cattle truck and narrowly avoiding the gas chambers and ovens, to
              enduring hunger, typhus, and unimaginable loss, we ultimately see
              the unbreakable bond between two brothers and their miraculous
              survival
            </p>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default About;
