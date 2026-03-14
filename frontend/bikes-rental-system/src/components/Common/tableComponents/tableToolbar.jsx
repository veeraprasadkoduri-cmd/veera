import Typography from "@mui/material/Typography";
import { GridToolbarContainer } from "@mui/x-data-grid";

export const TableToolbar = (tableTitle) => {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "start",
        backgroundColor: "#e8403d",
        color: "white"
      }}
    >
      <Typography component="p" variant="p" margin={2}>
        {tableTitle}
      </Typography>
    </GridToolbarContainer>
  );
};
