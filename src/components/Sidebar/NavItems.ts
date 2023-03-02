import { BsFillHouseDoorFill } from "react-icons/bs";
import { HiOutlineHashtag, HiOutlineUser } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

export const navItems = [
  {
    title: "Página inicial",
    href: "/",
    icon: BsFillHouseDoorFill,
  },
  {
    title: "Explorar",
    href: "#",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notificações",
    href: "#",
    icon: RiNotification2Line,
  },
  {
    title: "Mensagens",
    href: "#",
    icon: FiMail,
  },
  {
    title: "Itens salvos",
    href: "#",
    icon: FaRegBookmark,
  },
  {
    title: "Perfil",
    href: "#",
    icon: HiOutlineUser,
  },
];
