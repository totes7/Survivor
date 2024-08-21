import React from "react";
import "../../App.css";
import Card from "../Card";
import Footer from "../Footer";
import zoom from "../../images/ZoomProfile.jpg";
import kate from "../../images/KateProfile.jpg";
import sally from "../../images/SallyProfile.jpg";
import nigel from "../../images/NigelProfile.jpeg";
import rachel from "../../images/RachelProfile.jpg";
import morgan from "../../images/MorganProfile.jpg";
import mark from "../../images/MarkProfile.jpg";
import ace from "../../images/AceProfile.jpg";
import erran from "../../images/ErranProfile.jpg";
import pini from "../../images/PiniProfile.jpg";
import video from "../../videos/video1.MP4";

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
              Zoom Rockman is an award-winning cartoonist, illustrator,
              puppet-maker and animator. Zoom is the youngest-ever contributor
              to The Beano and Private Eye. Zoom has illustrated several books
              including Iain Dale’s The Prime Ministers (Political Book of the
              Year 2020) and The Presidents (2021), Michael Rosen’s St Pancreas
              Defendat Me, The Boris Letters (2022) and Farce Majeure (2023),
              Ivor Baddiel’s Ben’s Bonkers Bar Mitzvah (2023) and Jonny Zucker’s
              Striker Boy (2023). The Evening Standard named Zoom as one of the
              Most Influential Londoners under 25 and his cartoon for Private
              Eye, ‘You can’t do anything these days without being seen as an
              antisemite’ won Pocket Political Cartoon of the Year 2023. After
              reading Ivor Perl’s story, Zoom said: “Ivor’s book moved me
              deeply. When I read Ivor’s words, I saw them as a film, and I
              realised that I could bring these images to life using my paper
              puppet animation skills and create something accessible to an
              audience who wouldn’t normally think of delving into this subject
              matter. Anti-Semitism is again on the rise and I have heard people
              say, Why are Jews always banging on about the Holocaust?" - This
              film is the answer to that question.
            </p>
          </div>
          <div id="zoom-card">
            <Card
              src={zoom}
              alt="Zoom Rockman"
              caption="ZOOM ROCKMAN"
              title="Director"
              text="Zoom Rockman is an award-winning cartoonist, illustrator, puppet-maker and animator. Zoom is the youngest-ever contributor to The Beano and Private Eye. Zoom has illustrated several books including Iain Dale’s The Prime Ministers (Political Book of the Year 2020) and The Presidents (2021), Michael Rosen’s St Pancreas Defendat Me, The Boris Letters (2022) and Farce Majeure (2023), Ivor Baddiel’s Ben’s Bonkers Bar Mitzvah (2023) and Jonny Zucker’s Striker Boy (2023). The Evening Standard named Zoom as one of the Most Influential Londoners under 25 and his cartoon for Private Eye, ‘You can’t do anything these days without being seen as an antisemite’ won Pocket Political Cartoon of the Year 2023. After reading Ivor Perl’s story, Zoom said: “Ivor’s book moved me deeply. When I read Ivor’s words, I saw them as a film, and I realised that I could bring these images to life using my paper puppet animation skills and create something accessible to an audience who wouldn’t normally think of delving into this subject matter. Anti-Semitism is again on the rise and I have heard people say, Why are Jews always banging on about the Holocaust?“ - This film is the answer to that question."
              path="https://www.instagram.com/the_zoomcomic/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="kate-image"></div>
          <div id="kate-profile">
            <h3>KATE LENNARD - SCREENWRITER</h3>
            <p>Kate Lennard is a writer, researcher, production manager and furniture designer. She is Creative Director at ROCKMAN&ROCKMAN design studio, known for its original furniture designs influenced by its extensive 20th-century ephemera collection. Her Little Genius series of children's books, published by Penguin Random House in the UK, has been translated into 8 languages. Kate is also the mother of Zoom and Ace Rockman.</p>
          </div>
          <div id="kate-card">
          <Card
              src={kate}
              alt="Kate Lennard"
              caption="KATE LENNARD"
              title="Screenwriter"
              text="Kate Lennard is a writer, researcher, production manager and furniture designer. She is Creative Director at ROCKMAN&ROCKMAN design studio, known for its original furniture designs influenced by its extensive 20th-century ephemera collection. Her Little Genius series of children's books, published by Penguin Random House in the UK, has been translated into 8 languages. Kate is also the mother of Zoom and Ace Rockman."
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
            <p>Mark Garside is co founder of ROCKMAN & ROCKMAN Design Studio. He studied Industrial Design at the Royal College of Art and now specialises in luxury retail display and production. Mark is also the father of Zoom and Ace Rockman. </p>
          </div>
          <div id="mark-card">
          <Card
              src={mark}
              alt="Mark Garside"
              caption="MARK GARSIDE"
              title="Technical Design"
              text="Mark Garside is co founder of ROCKMAN & ROCKMAN Design Studio. He studied Industrial Design at the Royal College of Art and now specialises in luxury retail display and production. Mark is also the father of Zoom and Ace Rockman."
              path=""
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
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
          <div id="research-image-one"></div>
          <div id="research-image-two"></div>
          <div id="research-image-three"></div>
          <div id="research-video">
            <video src={video} controls></video>
          </div>
        </div>

        <h1>CHARACTERS</h1>

        <div id="characters">
          <div id="ivor-image"></div>
          <div id="ivor-profile">
            <h3>IVOR PERL</h3>
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
        </div>

        <h2>UNKNOWN CHARACTERS</h2>

        <div id="unknown">
          <div id="unknown-image-1"></div>
          <div id="unknown-image-2"></div>
          <div id="unknown-image-3"></div>
          <div id="unknown-image-4"></div>
          <div id="unknown-image-5"></div>
          <div id="unknown-image-6"></div>
          <div id="unknown-image-7"></div>
          <div id="unknown-image-8"></div>
          <div id="unknown-image-9"></div>
          <div id="unknown-image-10"></div>
          <div id="unknown-image-11"></div>
          <div id="unknown-image-12"></div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Info;
