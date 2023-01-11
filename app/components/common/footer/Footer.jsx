import styles from "./footer.module.scss";
import { useRouter } from "next/dist/client/router";

const naviItems = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place",
  },
  {
    icon: "person_outline",
    link: "/profile",
  },
];

const Footer = () => {
  const { push, asPath } = useRouter();

  return (
    <footer className={styles.footer}>
      <nav>
        {naviItems.map((item) => (
          <button
            className={asPath === item.link ? styles.active : ""}
            onClick={() => push(item.link)}
            key={item.icon}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
