import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import BasicRating from "../Reiting/Reiting";
import s from "./ReviewModal.module.css";

import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";

export default function ReviewModal({ bookId, modalOpen, onModalClose }) {
  const [open, setOpen] = React.useState(false);
  const [review, setReview] = React.useState("");
  const [rating, setRaiting] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  // const handleOpen = () => setOpen(modalOpen);
  const handleClose = () => {
    setOpen(false);
    onModalClose();
  };

  const onRatihgChange = (e) => {
    const currentRating = e.target.value;
    setRaiting(currentRating);
  };

  const onReviewChange = (e) => {
    const currentReview = e.target.value;
    setReview(currentReview);
  };

  const handleSave = (e) => {
    // console.log({ form: { review, rating } });
    // dispatch(AddBooksReview({ form: { review, rating }, booksId: bookId }));
    handleReset();
    onModalClose();
  };
  const handleReset = () => {
    setOpen(false);
    setReview("");
    setRaiting(null);
  };
  return (
    <>
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
          <Rating
            name="half-rating"
            size="small"
            // defaultValue={test}
            precision={0.5}
            onClick={onRatihgChange}
          />
          {/* <BasicRating /> */}
          <Typography className={s.textAreaDescr}>
            <label className={s.textAreaTitle}>Резюме</label>
            <textarea
              className={s.textArea}
              name="review"
              value={review}
              onChange={onReviewChange}
            ></textarea>
          </Typography>

          <Typography className={s.btnWrepper}>
            <button onClick={handleClose} className={s.backBtn}>
              Назад
            </button>
            <button onClick={handleSave} className={s.saveBtn}>
              Зберегти
            </button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
