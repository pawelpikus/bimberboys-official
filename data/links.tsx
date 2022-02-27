import { ROUTES } from "../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const links = [
  {
    route: ROUTES.HOME,
    text: <FontAwesomeIcon icon={faHome} size="lg" />,
  },
  { route: ROUTES.O_NAS, text: "O Nas" },
  { route: ROUTES.POSLUCHAJ, text: "Posłuchaj" },
  { route: ROUTES.GALERIA, text: "Galeria" },
  { route: ROUTES.KONTAKT, text: "Kontakt" },
];

export const socialLinks = [
  {
    route: ROUTES.FACEBOOK,
    text: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
  },
  {
    route: ROUTES.YOUTUBE,
    text: <FontAwesomeIcon icon={faYoutube} size="lg" />,
  },
];
