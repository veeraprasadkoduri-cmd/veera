import { useState, createContext } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

//create a context
export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertObj, setAlertObj] = useState(null);

  //here we defined 2 functions showAlert and closeAlert
  const showAlert = (message, severity) => {
    setAlertObj({ message, severity }); // shorthand pentru creare obiect cu 2 proprietati message is severity
  };

  const closeAlert = () => {
    setAlertObj(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}
      {alertObj && (
        <Snackbar
          open={Boolean(alertObj)}
          autoHideDuration={4000}
          onClose={closeAlert}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={alertObj.severity}
            onClose={closeAlert}
            variant="filled"
            open={Boolean(alertObj)}
          >
            {alertObj.message}
          </Alert>
        </Snackbar>
      )}
    </AlertContext.Provider>
  );
};
