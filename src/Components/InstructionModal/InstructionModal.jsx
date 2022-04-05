import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import s from "./InstructionModal.module.css";
import { Link } from "react-router-dom";

export default function InstructionModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>

      <Link to="/register">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={s.modal}>
            <Typography>
              <div>
                <p className={s.title}>Крок 1.</p>
                <p className={s.firstStep}>Створіть особисту бібліотеку</p>
                <p className={s.firstStepDescr}>
                  Додайте до неї книжки, які маєте намір прочитати.
                </p>
              </div>
            </Typography>
            <Typography>
              <div className={s.stepWrapper}>
                <p className={s.title}>Крок 2.</p>
                <p className={s.secondStep}>Сформуйте своє перше тренування</p>
                <p className={s.secondStepDescr}>
                  Визначте ціль, оберіть період, розпочинайте тренування.
                </p>
              </div>
            </Typography>
            <Typography className={s.btnWrepper}>
              <button onClick={handleClose} className={s.okBtn}>
                Ок
              </button>
            </Typography>
          </Box>
        </Modal>
      </Link>
    </>
  );
}
