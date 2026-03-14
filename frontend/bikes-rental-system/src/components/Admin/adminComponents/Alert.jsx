import Alert from "@mui/material/Alert";
import { useState } from "react";

const Alerttt = ({ message, severity, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseAlert = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return (
    <Alert
      severity={severity}
      onClose={handleCloseAlert}
      sx={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)"
      }}
      open={isOpen}
    >
      {message}
    </Alert>
  );
};

export default Alerttt;
