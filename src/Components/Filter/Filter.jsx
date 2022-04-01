import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filter/filterAction";
import s from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const inputvalue = useSelector((state) => state.filter);
  return (
    <Form className={s.filter}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          value={inputvalue}
          onChange={(e) => {
            dispatch(filterContacts(e.target.value));
          }}
          type="text"
          name="filter"
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
