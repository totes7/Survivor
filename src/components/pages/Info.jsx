import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../Card";
import Footer from "../Footer";
import zoom from "../../images/ZoomProfile.jpg";
import kate from "../../images/KateProfile.jpg";
import sally from "../../images/SallyProfile.jpg";
import nigel from "../../images/NigelProfile.jpg";
import nick from "../../images/NickProfile.png";
import rachel from "../../images/RachelProfile.jpg";
import jen from "../../images/JenniferProfile.jpg";
import morgan from "../../images/MorganProfile.jpg";
import mark from "../../images/MarkProfile.jpg";
import ace from "../../images/AceProfile.jpg";
import erran from "../../images/ErranProfile.jpg";
import pini from "../../images/PiniProfile.jpg";
import matt from "../../images/MattProfile.jpg";
import lemon from "../../images/LemonSoul.png";
import banner from "../../images/BannerLogo.jpg";

function Info() {
  return (
    <>
      <div className="info">

        <img className="film-banner" src={banner} alt="film banner" />

        <h1>TEAM</h1>

        <div id="team">
          <div id="zoom-image"></div>
          <div id="zoom-profile">
            <h3>ZOOM ROCKMAN</h3>
            <h4>DIRECTOR</h4>
            <p>
              Zoom Rockman is an award-winning cartoonist, illustrator,
              puppet-maker and animator. Zoom is the youngest-ever contributor
              to <em>The Beano</em> and <em>Private Eye</em>. Zoom has
              illustrated several books including{" "}
              <em>Iain Dale’s The Prime Ministers</em> (Political Book of the
              Year 2020) and <em>The Presidents</em> (2021),{" "}
              <em>
                Michael Rosen’s St Pancreas Defendat Me, The Boris Letters
              </em>{" "}
              (2022) and <em>Farce Majeure</em> (2023). The Evening Standard
              named Zoom as one of the Most Influential Londoners under 25 and
              his cartoon for <em>Private Eye</em>, ‘You can’t do anything these
              days without being seen as an antisemite’ won Pocket Cartoon of
              the Year at the Political Cartoon Awards 2023.
            </p>
            {/* <Link to="https://lemonsoul.com/" target="_blank">
              <img src={rockman} alt="zoom rockman logo" className="zoom-logo" />
            </Link> */}
          </div>
          <div id="zoom-card">
            <Card
              src={zoom}
              alt="Zoom Rockman"
              caption="ZOOM ROCKMAN"
              title="Director"
              text={
                <>
                  Zoom Rockman is an award-winning cartoonist, illustrator,
                  puppet-maker and animator. Zoom is the youngest-ever
                  contributor to <em>The Beano</em> and <em>Private Eye</em>.
                  Zoom has illustrated several books including{" "}
                  <em>Iain Dale’s The Prime Ministers</em> (Political Book of
                  the Year 2020) and <em>The Presidents</em> (2021),{" "}
                  <em>
                    Michael Rosen’s St Pancreas Defendat Me, The Boris Letters
                  </em>{" "}
                  (2022) and <em>Farce Majeure</em> (2023). The Evening Standard
                  named Zoom as one of the Most Influential Londoners under 25
                  and his cartoon for <em>Private Eye</em>, ‘You can’t do
                  anything these days without being seen as an antisemite’ won
                  Pocket Cartoon of the Year at the Political Cartoon Awards
                  2023.
                </>
              }
              path="https://www.instagram.com/the_zoomcomic/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
            {/* <Link to="https://lemonsoul.com/" target="_blank">
              <img src={rockman} alt="zoom rockman logo" className="zoom-logo-mobile" />
            </Link> */}
          </div>
          <div id="kate-image"></div>
          <div id="kate-profile">
            <h3>KATE LENNARD</h3>
            <h4>SCREENWRITER</h4>
            <p>
              Kate Lennard is a writer, researcher, production manager and
              furniture designer. She is Creative Director at ROCKMAN & ROCKMAN
              design studio, known for its original furniture designs influenced
              by its extensive 20th-century ephemera archive. Her{" "}
              <em>Little Genius</em>
              series of children's books, published by Penguin Random House in
              the UK, has been translated into 8 languages.
            </p>
          </div>
          <div id="kate-card">
            <Card
              src={kate}
              alt="Kate Lennard"
              caption="KATE LENNARD"
              title="Screenwriter"
              text={
                <>
                  Kate Lennard is a writer, researcher, production manager and
                  furniture designer. She is Creative Director at ROCKMAN &
                  ROCKMAN design studio, known for its original furniture
                  designs influenced by its extensive 20th-century ephemera
                  archive. Her <em>Little Genius</em> series of children's
                  books, published by Penguin Random House in the UK, has been
                  translated into 8 languages.
                </>
              }
              path="https://www.instagram.com/rockman_and_rockman/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="sally-image"></div>
          <div id="sally-profile">
            <h3>SALLY VAUGHAN</h3>
            <h4>PRODUCER</h4>
            <p>
              Sally Vaughan is a producer, agent and coach. Prior to founding
              Exceptional, Sally's career spanned the media and art worlds. As
              vice president marketing for ESPN Asia and CNN International, she
              led the marketing launch of ESPN India and CNN's first
              multiplatform campaign. Sally launched the first online platform
              purely for figurative artists in 2008 becoming art consultant to
              the Savoy hotel. Sally has been Zoom Rockman's agent since he was
              16 years old. She is an ILM qualified Leadership and Management
              coach and a Member of the Institute of Leadership.
            </p>
          </div>
          <div id="sally-card">
            <Card
              src={sally}
              alt="Sally Vaughan"
              caption="SALLY VAUGHAN"
              title="Producer"
              text="Sally Vaughan is a producer, agent and coach. Prior to founding Exceptional, Sally's career spanned the media and art worlds. As vice president marketing for ESPN Asia and CNN International, she led the marketing launch of ESPN India and CNN's first multiplatform campaign. Sally launched the first online platform purely for figurative artists in 2008 becoming art consultant to the Savoy hotel. Sally has been Zoom Rockman's agent since he was 16 years old. She is an ILM qualified Leadership and Management coach and a Member of the Institute of Leadership."
              path="https://www.linkedin.com/in/sallyvaughan/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="nigel-image"></div>
          <div id="nigel-profile">
            <h3>NIGEL CANIN</h3>
            <h4>EXECUTIVE PRODUCER</h4>
            <p>
              Nigel originally trained as a teacher in the 90s. Motivated by the
              potential power of technology in the classroom, he launched 2
              Simple in 1999 to build and deliver creative programmes for
              children, now the online learning space Purple Mash, used by over
              6,500 primary schools worldwide. Nigel recently founded Lemon
              Soul, an independent publishing company, in memory of his close
              friend Jonny Zucker. His latest venture, co-founded with Adam
              Goodman, is 2econd Chance, a computer recycling community interest
              company for vulnerable adults and young people aged 16-25.
            </p>
            <Link to="https://lemonsoul.com/" target="_blank">
              <img src={lemon} alt="lemon soul logo" className="ls-logo" />
            </Link>
          </div>
          <div id="nigel-card">
            <Card
              src={nigel}
              alt="Nigel Canin"
              caption="NIGEL CANIN"
              title="Executive Producer"
              text="Nigel originally trained as a teacher in the 90s. Motivated by the potential power of technology in the classroom, he launched 2 Simple in 1999 to build and deliver creative programmes for children, now the online learning space Purple Mash, used by over 6,500 primary schools worldwide. Nigel recently founded Lemon Soul, an independent publishing company, in memory of his close friend Jonny Zucker. His latest venture, co-founded with Adam Goodman, is 2econd Chance, a computer recycling community interest company for vulnerable adults and young people aged 16-25. "
              path="https://www.linkedin.com/in/nigel-canin-43061317/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
            <Link to="https://lemonsoul.com/" target="_blank">
              <img
                src={lemon}
                alt="lemon soul logo"
                className="ls-logo-mobile"
              />
            </Link>
          </div>
          <div id="nick-image"></div>
          <div id="nick-profile">
            <h3>NICK GOLDFARB</h3>
            <h4>EXECUTIVE PRODUCER</h4>
            <p>
              Nick Goldfarb has produced feature films including:{" "}
              <em>
                Metamorphosis, The Informer, Disobedience, Everything in the
                Song Is True, Opposite Field
              </em>{" "}
              and the short film <em>Triggered</em> which was nominated by the
              Hollywood Critics Association as Best Short Film in 2022.
            </p>
          </div>
          <div id="nick-card">
            <Card
              src={nick}
              alt="Nick Goldfarb"
              caption="NICK GOLDFARB"
              title="Executive Producer"
              text={
                <>
                  Nick Goldfarb has produced feature films including:{" "}
                  <em>
                    Metamorphosis, The Informer, Disobedience, Everything in the
                    Song Is True, Opposite Field
                  </em>{" "}
                  and the short film <em>Triggered</em> which was nominated by
                  the Hollywood Critics Association as Best Short Film in 2022.
                </>
              }
              path="https://www.linkedin.com/in/nickgoldfarb/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="rachel-image"></div>
          <div id="rachel-profile">
            <h3>RACHEL MANSSON</h3>
            <h4>DISTRIBUTION</h4>
            <p>
              Commercially focused, highly creative international media senior
              marketing executive with extensive knowledge of the entertainment
              industry. Rachel has successfully conceived, built, launched and
              grown many successful digital businesses and products
              internationally. Prior to founding the BYO Collective, Rachel held
              senior roles at NBCUniversal, PolyGram Films, Star TV, MTV Europe
              and Virgin Records. Currently BYO Collective has consulted for
              multiple media companies including PBS, Viaplay, Really Epic Dog,
              O3 Medya, MBC Studios amongst others.
            </p>
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
            <h3>JENNIFER BUZZELLI</h3>
            <h4>ASSOCIATE PRODUCER</h4>
            <p>
              Jennifer Buzzelli is a NY-based producer with 25 years experience in
              international co-production, distribution and programming for
              the likes of National Geographic, truTV and KONAMI.
            </p>
          </div>
          <div id="jen-card">
            <Card
              src={jen}
              alt="Jennifer Buzzelli"
              caption="JENNIFER BUZZELLI"
              title="Associate Producer"
              text="Jennifer Buzzelli is a NY-based producer with 25 years experience in international co-production, distribution and programming for the likes of National Geographic, truTV and KONAMI."
              path=""
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="erran-image"></div>
          <div id="erran-profile">
            <h3>ERRAN BARON COHEN</h3>
            <h4>COMPOSER</h4>
            <p>
              {" "}
              Erran Baron Cohen is an award winning composer whose work has
              encompassed film and television scores, album releases, orchestral
              commissions and musical theatre. His knowledge of contemporary
              classical, electronic and world music makes him an extremely
              versatile composer able to turn his talents to a wide variety of
              eclectic projects. Erran has received numerous Composer Awards for
              his scores to <em>Borat, Bruno</em> and <em>The Dictator</em> and
              his song <em>Wuhan Flu</em> was Oscar shortlisted.
            </p>
          </div>
          <div id="erran-card">
            <Card
              src={erran}
              alt="Erran Baron Cohen"
              caption="ERRAN BARON COHEN"
              title="Composer"
              text={
                <>
                  Erran Baron Cohen is an award winning composer whose work has
                  encompassed film and television scores, album releases,
                  orchestral commissions and musical theatre. His knowledge of
                  contemporary classical, electronic and world music makes him
                  an extremely versatile composer able to turn his talents to a
                  wide variety of eclectic projects. Erran has received numerous
                  Composer Awards for his scores to <em>Borat, Bruno</em> and{" "}
                  <em>The Dictator</em> and his song <em>Wuhan Flu</em> was
                  Oscar shortlisted.
                </>
              }
              path="http://www.erranbaroncohen.com/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="pini-profile">
            <h3>PINI BROWN</h3>
            <h4>SINGER</h4>
            <p>
              Pini Brown trained as a cantor in Jerusalem. His early years were
              marked by a struggle to fit in and conform within his Ultra
              Orthodox community. Age 20 he was brought to the UK for an
              arranged marriage and after a period of deep unhappiness he made
              the brave decision to leave. Embraced by the wider Jewish
              community he continues to pave his way. By day he hosts tours of
              the East End and by night he is making a name for himself
              performing his unique brand of Yiddish Klezmer in the late night
              blues and jazz clubs of London.
            </p>
          </div>
          <div id="pini-image"></div>
          <div id="pini-card">
            <Card
              src={pini}
              alt="Pini Brown"
              caption="PINI BROWN"
              title="Singer"
              text="Pini Brown trained as a cantor in Jerusalem. His early years were
              marked by a struggle to fit in and conform within his Ultra
              Orthodox community. Age 20 he was brought to the UK for an
              arranged marriage and after a period of deep unhappiness he made
              the brave decision to leave. Embraced by the wider Jewish
              community he continues to pave his way. By day he hosts tours of
              the East End and by night he is making a name for himself performing his
              unique brand of Yiddish Klezmer in the late night blues and jazz
              clubs of London."
              path="https://www.instagram.com/pini_on_the_roof/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="matt-profile">
            <h3>MATTHEW WHITE</h3>
            <h4>TITLE SEQUENCE DESIGNER</h4>
            <p>
              Matthew, Creative Director of SuperGrizzly, is the creator of
              title sequences for notable films and series such as{" "}
              <em>
                The Death of Stalin , The Duke, Ten Percent, Stan & Ollie, The
                355, Eight for Silver{" "}
              </em>{" "}
              and more. SuperGrizzly is proud to have designed the titles for
              Survivor, while providing post-production support and offering
              design advice throughout the project.
            </p>
          </div>
          <div id="matt-image"></div>
          <div id="matt-card">
            <Card
              src={matt}
              alt="Matthew White"
              caption="MATTHEW WHITE"
              title="Title Sequence Designer"
              text={
                <>
                  Matthew, Creative Director of SuperGrizzly, is the creator of
                  title sequences for notable films and series such as{" "}
                  <em>
                    The Death of Stalin , The Duke, Ten Percent, Stan & Ollie,
                    The 355, Eight for Silver{" "}
                  </em>{" "}
                  and more. SuperGrizzly is proud to have designed the titles
                  for Survivor, while providing post-production support and
                  offering design advice throughout the project.
                </>
              }
              path="https://www.linkedin.com/in/matthewbarnabywhite/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="morgan-image"></div>
          <div id="morgan-profile">
            <h3>MORGAN PENN</h3>
            <h4>SOUND DESIGN</h4>
            <p>Morgan Penn is a London-based portrait painter and musician. </p>
          </div>
          <div id="morgan-card">
            <Card
              src={morgan}
              alt="Morgan Penn"
              caption="MORGAN PENN"
              title="Sound Design"
              text="Morgan Penn is a London-based portrait painter and musician."
              path="https://www.instagram.com/morganpennportraits/"
              target="_blank"
              classOuter="team-card-container"
              classImage="team-card-image"
            />
          </div>
          <div id="ace-image"></div>
          <div id="ace-profile">
            <h3>ACE ROCKMAN</h3>
            <h4>ASSISTANT COLOURIST AND PUPPET MAKER</h4>
            <p>
              Ace is currently in his 3rd year studying Classics at St Andrew’s
              University.
            </p>
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
            <h3>MARK GARSIDE</h3>
            <h4>TECHNICAL DESIGN</h4>
            <p>
              Mark Garside is co founder of ROCKMAN & ROCKMAN Design Studio. He
              studied Industrial Design at the Royal College of Art and now
              specialises in luxury retail display and production.{" "}
            </p>
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

        <h1>MUSIC</h1>
        <div id="music-text">
          <p>
            Zoom Rockman’s music concept is for the soundtrack to be broken down
            into three main sections. The first, set in Hungary, traditional
            Yiddish Folk, developing into an ominous, Talmudic chant as the Nazi
            invasion unfolds only to end abruptly, when the cattle truck doors
            are bolted shut.
          </p>
          <p>
            As the cattle truck doors are unbolted again at Auschwitz, the
            second section begins. Blood pumping in the ears, panic attack
            sounds slowly evolving into an industrial soundscape following the
            new inmate’s metamorphosis into death camp prisoners through a full
            spectrum of Holocaust indignities, revealed in rapid succession.
            It’s relentless, uncomfortable, disturbing and inhumane. The final
            crescendo and eventual escape through the perimeter fence is
            illustrated with the use of the exhilarating, rebellious sound of
            ‘Motorcade’ By Magazine [Post Punk band from 1978] ending abruptly
            at the end of WW2 with a door being kicked in.
          </p>
          <p>
            Section 3 begins with silence. A chance to see what remains. We hear
            nature. It’s emotional, still threatening, but hopeful. Finally we
            hear the distant ancient sounds of the Hebrew prayers getting louder
            and eventually transforming into the joyous sound of 1950’s Brick
            Lane, British, Yiddish Jazz.
          </p>
          <p>
            Ivor’s Theme, composed by Erran Baron Cohen is woven throughout,
            with additional vocals provided by trained cantor, Pini Brown. The
            Industrial sound was designed by musician Morgan Penn and edited
            together by Zoom in his studio.
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
      </div>

      <Footer />
    </>
  );
}

export default Info;
