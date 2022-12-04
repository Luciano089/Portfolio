import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/SocialNetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];


const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href="https://github.com/Luciano089"
          className="social-btn"
          id={network.FaGithub}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
        
      ))}
    </section>
  );
};

export default SocialNetworks;
