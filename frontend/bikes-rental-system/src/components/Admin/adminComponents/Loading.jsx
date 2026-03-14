import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
