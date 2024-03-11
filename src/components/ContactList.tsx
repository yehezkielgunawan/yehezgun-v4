import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ContactList = () => {
  const contactListIcon = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/yehezkiel-gunawan-595128138/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/yehez.gallery",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/YehezGun",
    },
    {
      name: "Github",
      icon: FaGithub,
      url: "https://github.com/yehezkielgunawan",
    },
    {
      name: "Email",
      icon: MdEmail,
      url: "mailto:yehezkielgunawan28@gmail.com",
    },
  ];
  return (
    <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        {contactListIcon.map(contact => (
          <div className="group relative" key={contact.name}>
            <a href={contact.url} target="_blank">
              <contact.icon size={32} />
            </a>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black p-0.5 text-white opacity-0 transition-opacity duration-75 group-hover:opacity-100 dark:bg-white dark:text-black">
              <p>{contact.name}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://yehezgun.mayar.link/support"
        target="_blank"
        className="flex w-full items-center justify-center gap-2 rounded bg-black p-2 text-base font-bold text-white hover:cursor-pointer dark:bg-white dark:text-black md:w-auto md:justify-start"
      >
        <GrMoney size={24} />
        Support Me
      </a>
    </div>
  );
};

export default ContactList;
