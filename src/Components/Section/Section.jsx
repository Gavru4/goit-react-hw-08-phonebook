import PropTypes from "prop-types";
import s from "./section.module.css";

const Section = ({ children, title }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  // children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
