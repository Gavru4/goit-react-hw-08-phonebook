import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filter/filterAction";
import s from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const inputvalue = useSelector((state) => state.filter);
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Find contacts by name</span>
      <input
        value={inputvalue}
        onChange={(e) => {
          dispatch(filterContacts(e.target.value));
        }}
        type="text"
        name="filter"
      />
    </div>
  );
};

export default Filter;
