import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  return (
    <ScrollLink
      to={"home"}
      smooth
      spy
      className="cursor-pointer"
      activeClass="text-accent"
    >
      <Image src="/assets/logo.png" alt="Logo" width={230} height={40} />
    </ScrollLink>
  );
};

export default Logo;
