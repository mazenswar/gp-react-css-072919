import React from "react";
import "../Stylesheets/about.scss";
import { pika } from "../assets";

const About = () => (
  <section id="about-section">
    {pika}
    <h2> About </h2>
    <div className="about-content">
      <p>
        <strong>Pegasus</strong> (Greek: Πήγασος, Pḗgasos; Latin: Pegasus,
        Pegasos) is a mythical winged divine horse, and one of the most
        recognized creatures in Greek mythology. Usually depicted as pure white,
        Pegasus is the offspring of the Olympian god Poseidon. He was foaled by
        the Gorgon Medusa[1] upon her death, when the hero Perseus decapitated
        her. Pegasus is the brother of Chrysaor and the uncle of Geryon.
      </p>

      <p>
        Greco-Roman poets wrote about the ascent of Pegasus to heaven after his
        birth, and his subsequent obeisance to Zeus, king of the gods, who
        instructed him to bring lightning and thunder from Olympus. Friend of
        the Muses, Pegasus created Hippocrene, the fountain on Mt. Helicon.
      </p>

      <p>
        Pegasus was caught by the Greek hero Bellerophon, near the fountain
        Peirene, with the help of Athena and Poseidon. Pegasus allowed
        Bellerophon to ride him in order to defeat the monstrous Chimera, which
        led to many other exploits. Bellerophon later fell from the winged
        horse's back while trying to reach Mount Olympus. Afterwards, Zeus
        transformed Pegasus into the eponymous constellation.
      </p>

      <p>
        The symbolism of Pegasus varies with time. Symbolic of wisdom and fame
        from the Middle Ages until the Renaissance, Pegasus became associated
        with poetry around the 19th century, as the fountainhead of sources from
        which the poets gained their inspiration. Pegasus is the subject of a
        very rich iconography, especially throughout ancient Greek pottery and
        paintings and sculptures of the Renaissance. Hypotheses have been
        proposed regarding the relationship between Pegasus and the Muses, the
        gods Athena, Poseidon, Zeus, Apollo, and the hero Perseus.
      </p>
    </div>
    <img
      className="peg"
      src="https://ae01.alicdn.com/kf/HTB1ta26SFXXXXXQXFXXq6xXFXXX4/Diamond-Painting-Horse-Flying-The-Horse-Pegasus-DIY-5d-Pictures-Of-Crystals-Mosaic-Diamond-Full-Compilation.jpg_640x640.jpg"
      alt="gp"
    />
  </section>
);

export default About;
