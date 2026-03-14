import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

const Modal = ({ title, modalContent, isOpen, onClose, handlePressOK }) => {
  const handleModalClose = () => {
    onClose();
  };

  const handleModalPressOk = () => {
    handlePressOK();
  };

  return (
    <>
      <CustomDialog
        onClose={handleModalClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <hr></hr>
        <DialogContent>
          <Typography gutterBottom fontWeight="bold">
            {modalContent}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalPressOk}>OK</Button>
          <Button onClick={handleModalClose}>Cancel</Button>
        </DialogActions>
      </CustomDialog>
    </>
  );
};

export default Modal;
