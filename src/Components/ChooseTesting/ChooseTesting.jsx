import { Link } from "react-router-dom";
import s from "./ChooseTesting.module.css";

const ChooseTesting = () => {
  return (
    <section className={s.testSection}>
      <p className={s.descroption}>
        “Regression testing. What is it? If the system compiles, that's good, if
        it boots, that's great!”
      </p>
      <span className={s.line}></span>
      <p className={s.autor}>Linus Torvalds</p>
      <p className={s.autorDescr}>Linux kernel creator, hacker, 1969</p>
      <Link className={s.btnQA} to={"/"}>
        <span className={s.btnQADescr}> QA technical training</span>
      </Link>
      <Link className={s.btnTestTheori} to={"/"}>
        <span className={s.btnTestTheoriDescr}>Testing theory</span>
      </Link>
    </section>
  );
};

export default ChooseTesting;
