import React from "react";
import "../../App.css";
import Card from "../Card";
import Footer from "../Footer";
import zoom from "../../images/ZoomProfile.jpg";
import kate from "../../images/KateProfile.jpg";
import sally from "../../images/SallyProfile.jpg";
import nigel from "../../images/NigelProfile.jpeg";
import rachel from "../../images/RachelProfile.jpg";
import jen from "../../images/JenniferProfile.jpg";
import morgan from "../../images/MorganProfile.jpg";
import mark from "../../images/MarkProfile.jpg";
import ace from "../../images/AceProfile.jpg";
import erran from "../../images/ErranProfile.jpg";
import pini from "../../images/PiniProfile.jpg";


function Info() {
  return (
    <>
      <div className="info">
        <h1>TEAM</h1>

        <div id="team">
          <div id="zoom-image"></div>
          <div id="zoom-profile">
            <h3>ZOOM ROCKMAN - DIRECTOR</h3>
            <p>
            Zoom Rockman is an award-winning cartoonist, illustrator, puppet-maker and animator. Zoom is the youngest-ever contributor to The Beano and Private Eye. Zoom has illustrated several books including Iain Dale’s The Prime Ministers (Political Book of the Year 2020) and The Presidents (2021), Michael Rosen’s St Pancreas Defendat Me, The Boris Letters (2022) and Farce Majeure (2023). The Evening Standard named Zoom as one of the Most Influential Londoners under 25 and his cartoon for Private Eye, ‘You can’t do anything these days without being seen as an antisemite’ won best Pocket Cartoon of the Year at the Political Cartoon Awards 2023.
            </p>
          </div>
          <div id="zoom-card">
            <Card
              src={zoom}
              alt="Zoom Rockman"
              caption="ZOOM ROCKMAN"
              title="Director"
              text="Zoom Rockman is an award-winning cartoonist, illustrator, puppet-maker and animator. Zoom is the youngest-ever contributor to The Beano and Private Eye. Zoom has illustrated several books including Iain Dale’s The Prime Ministers (Political Book of the Year 2020) and The Presidents (2021), Michael Rosen’s St Pancreas Defendat Me, The Boris Letters (2022) and Farce Majeure (2023). The Evening Standard named Zoom as one of the Most Influential Londoners under 25 and his cartoon for Private Eye, ‘You can’t do anything these days without being seen as an antisemite’ won best Pocket Cartoon of the Year at the Political Cartoon Awards 2023."
              path="https://www.instagram.com/the_zoomcomic/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="kate-image"></div>
          <div id="kate-profile">
            <h3>KATE LENNARD - SCREENWRITER</h3>
            <p>Kate Lennard is a writer, researcher, production manager and furniture designer. She is Creative Director at ROCKMAN & ROCKMAN design studio, known for its original furniture designs influenced by its extensive 20th-century ephemera archive. Her Little Genius series of children's books, published by Penguin Random House in the UK, has been translated into 8 languages.</p>
          </div>
          <div id="kate-card">
          <Card
              src={kate}
              alt="Kate Lennard"
              caption="KATE LENNARD"
              title="Screenwriter"
              text="Kate Lennard is a writer, researcher, production manager and furniture designer. She is Creative Director at ROCKMAN & ROCKMAN design studio, known for its original furniture designs influenced by its extensive 20th-century ephemera archive. Her Little Genius series of children's books, published by Penguin Random House in the UK, has been translated into 8 languages."
              path="https://www.instagram.com/rockman_and_rockman/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="sally-image"></div>
          <div id="sally-profile">
            <h3>SALLY VAUGHAN - PRODUCER</h3>
            <p>Sally Vaughan is a producer, agent and coach. Prior to founding Exceptional, Sally's career spanned the media and art worlds. As vice president marketing for ESPN Asia and CNN International, she led the marketing launch of ESPN India and CNN's first multiplatform campaign. Sally launched the first online platform purely for figurative artists in 2008 becoming art consultant to the Savoy hotel. Sally has been Zoom Rockman's agent for 8 years since he was 16 years old. She is an ILM qualified Leadership and Management coach and a Member of the Institute of Leadership.</p>
          </div>
          <div id="sally-card">
          <Card
              src={sally}
              alt="Sally Vaughan"
              caption="SALLY VAUGHAN"
              title="Producer"
              text="Sally Vaughan is a producer, agent and coach. Prior to founding Exceptional, Sally's career spanned the media and art worlds. As vice president marketing for ESPN Asia and CNN International, she led the marketing launch of ESPN India and CNN's first multiplatform campaign. Sally launched the first online platform purely for figurative artists in 2008 becoming art consultant to the Savoy hotel. Sally has been Zoom Rockman's agent for 8 years since he was 16 years old. She is an ILM qualified Leadership and Management coach and a Member of the Institute of Leadership."
              path="https://www.linkedin.com/in/sallyvaughan/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="nigel-image"></div>
          <div id="nigel-profile">
            <h3>NIGEL CANIN - EXECUTIVE PRODUCER</h3>
            <p>Nigel Canin is Director of 2Simple Educational Software, Lemon Soul Publishing and Second Chance, a not for profit computer recycling project.</p>
          </div>
          <div id="nigel-card">
          <Card
              src={nigel}
              alt="Nigel Canin"
              caption="NIGEL CANIN"
              title="Executive Producer"
              text="Nigel Canin is Director of 2Simple Educational Software, Lemon Soul Publishing and Second Chance, a not for profit computer recycling project."
              path="https://www.linkedin.com/in/nigel-canin-43061317/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="rachel-image"></div>
          <div id="rachel-profile">
            <h3>RACHEL MANSSON - DISTRIBUTION</h3>
            <p>Commercially focused, highly creative international media senior marketing executive with extensive knowledge of the entertainment industry. Rachel has successfully conceived, built, launched and grown many successful digital businesses and products internationally. Prior to founding the BYO Collective, Rachel has held senior roles at NBCUniversal, PolyGram Films, Star TV, MTV Europe and Virgin Records. Currently BYO Collective consults for multiple media companies including PBS, Viaplay, Really Epic Dog, O3 Medya, MBC Studios amongst others.</p>
          </div>
          <div id="rachel-card">
          <Card
              src={rachel}
              alt="Rachel Mansson"
              caption="RACHEL MANSSON"
              title="Distribution"
              text="Commercially focused, highly creative international media senior marketing executive with extensive knowledge of the entertainment industry. Rachel has successfully conceived, built, launched and grown many successful digital businesses and products internationally. Prior to founding the BYO Collective, Rachel has held senior roles at NBCUniversal, PolyGram Films, Star TV, MTV Europe and Virgin Records. Currently BYO Collective consults for multiple media companies including PBS, Viaplay, Really Epic Dog, O3 Medya, MBC Studios amongst others."
              path="https://www.linkedin.com/in/rachelmansson/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="jen-image"></div>
          <div id="jen-profile">
            <h3>JEN BUZZELLI - ASSOCIATE PRODUCER</h3>
            <p>Jen Buzzelli is a NY-based producer with 25 years experience in international co-production, distribution and programming and for the likes of National Geographic, truTV and KONAMI.</p>
          </div>
          <div id="jen-card">
          <Card
              src={jen}
              alt="Jen Buzzelli"
              caption="JEN BUZZELLI"
              title="Associate Producer"
              text="Jen Buzzelli is a NY-based producer with 25 years experience in international co-production, distribution and programming and for the likes of National Geographic, truTV and KONAMI."
              path=""
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="erran-image"></div>
          <div id="erran-profile">
            <h3>ERRAN BARON COHEN - COMPOSER</h3>
            <p>
              {" "}
              Erran Baron Cohen is an award winning composer whose work has encompassed film and television scores, album releases, orchestral commissions and musical theatre. His knowledge of contemporary classical, electronic and world music makes him an extremely versatile composer able to turn his talents to a wide variety of eclectic projects. Erran has received numerous Composer Awards for his scores to Borat, Bruno and The Dictator and his song Wuhan Flu was Oscar shortlisted.
            </p>
          </div>
          <div id="erran-card">
            <Card
              src={erran}
              alt="Erran Baron Cohen"
              caption="ERRAN BARON COHEN"
              title="Composer"
              text="Erran Baron Cohen is an award winning composer whose work has encompassed film and television scores, album releases, orchestral commissions and musical theatre. His knowledge of contemporary classical, electronic and world music makes him an extremely versatile composer able to turn his talents to a wide variety of eclectic projects. Erran has received numerous Composer Awards for his scores to Borat, Bruno and The Dictator and his song Wuhan Flu was Oscar shortlisted."
              path="http://www.erranbaroncohen.com/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="pini-profile">
            <h3>PINI BROWN - SINGER</h3>
            <p>
              Pini Brown trained as a Cantor in Jerusalem. His early years were
              marked by a struggle to fit in and conform within his Ultra
              Orthodox Community. Age 20 he was brought to the UK for an
              arranged marriage and after a period of deep unhappiness he made
              the brave decision to leave. Embraced by the wider Jewish
              Community he continues to pave his way; By day, hosting tours of
              the East End and by night making a name for himself performing his
              unique brand of Yiddish Klezmer in the late night blues and jazz
              clubs of London.
            </p>
          </div>
          <div id="pini-image"></div>
          <div id="pini-card">
            <Card
              src={pini}
              alt="Pini Brown"
              caption="PINI BROWN"
              title="Singer"
              text="Pini Brown trained as a Cantor in Jerusalem.  His early years were marked by a struggle to fit in and conform within his Ultra Orthodox Community. Age 20 he was brought to the UK for an arranged marriage and after a period of deep unhappiness he made the brave decision to leave. Embraced by the wider Jewish Community he continues to pave his way; By day, hosting tours of the East End and by night making a name for himself performing his unique brand of Yiddish Klezmer in the late night blues and jazz clubs of London."
              path="https://www.instagram.com/pini_on_the_roof/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="morgan-image"></div>
          <div id="morgan-profile">
            <h3>MORGAN PENN - SOUND DESIGN</h3>
            <p>Morgan Penn is a London based Portrait Painter and Musician. </p>
          </div>
          <div id="morgan-card">
          <Card
              src={morgan}
              alt="Morgan Penn"
              caption="MORGAN PENN"
              title="Sound Design"
              text="Morgan Penn is a London based Portrait Painter and Musician."
              path="https://www.instagram.com/morganpennportraits/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="ace-image"></div>
          <div id="ace-profile">
            <h3>ACE ROCKMAN - ASSISTANT COLOURIST AND PUPPET MAKER</h3>
            <p>Ace is currently in his 3rd year studying Classics at St Andrew’s University.</p>
          </div>
          <div id="ace-card">
          <Card
              src={ace}
              alt="Ace Rockman"
              caption="ACE ROCKMAN"
              title="Assistant Colourist and Puppet Maker"
              text="Ace is currently in his 3rd year studying Classics at St Andrew’s University."
              path=""
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="mark-image"></div>
          <div id="mark-profile">
            <h3>MARK GARSIDE - TECHNICAL DESIGN</h3>
            <p>Mark Garside is co founder of ROCKMAN & ROCKMAN Design Studio. He studied Industrial Design at the Royal College of Art and now specialises in luxury retail display and production. </p>
          </div>
          <div id="mark-card">
          <Card
              src={mark}
              alt="Mark Garside"
              caption="MARK GARSIDE"
              title="Technical Design"
              text="Mark Garside is co founder of ROCKMAN & ROCKMAN Design Studio. He studied Industrial Design at the Royal College of Art and now specialises in luxury retail display and production."
              path=""
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
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

      </div>

      <Footer />
    </>
  );
}

export default Info;
