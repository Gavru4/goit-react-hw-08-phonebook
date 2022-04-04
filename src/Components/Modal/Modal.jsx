import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicRating from "../Reiting/Reiting";
import s from "./Modal.module.css";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={s.rating}>Обрати рейтинг книги</p>
          </Typography>
          <BasicRating />
          <Typography className={s.textAreaDescr}>
            <label className={s.textAreaTitle}>Резюме</label>
            <textarea className={s.textArea} name="cv"></textarea>
          </Typography>

          <Typography className={s.btnWrepper}>
            <button onClick={handleClose} className={s.backBtn}>
              Назад
            </button>
            <button onClick={handleClose} className={s.saveBtn}>
              Зберегти
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// import { useState } from "react";
// import { Button, FormControl, InputGroup } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import BasicRating from "../Reiting/Reiting";
// import s from "./Modal.module.css";

// const Example = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal
//         show={show}
//         centered={true}
//         className={s.modal}
//         contentClassName={"test"}
//         dialogClassName={"test"}
//       >
//         <Modal.Title className={s.title}>Обрати рейтинг книги</Modal.Title>
//         <BasicRating />
//         <InputGroup.Text className={s.summary}>Резюме</InputGroup.Text>
//         <FormControl
//           as="textarea"
//           aria-label="With textarea"
//           className={s.textArea}
//         />

//         <div className={s.btnWrepper}>
//           <Button onClick={handleClose} className={s.backBtn}>
//             Назад
//           </Button>
//           <Button onClick={handleClose} className={s.saveBtn}>
//             Зберегти
//           </Button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Example;
