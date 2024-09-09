import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  return <div className={classes.container}>
    <div className={classes.left}>
      <Link className={classes.link} href="/home">Home</Link>
      <Link className={classes.link} href="/experience">Experience</Link>
    </div>
  </div>
}


export default Header;
