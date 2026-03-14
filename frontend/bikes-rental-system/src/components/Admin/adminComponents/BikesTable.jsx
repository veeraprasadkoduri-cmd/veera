import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { fetchData } from "../../../utils/fetchEndPoints";
import { transformBikes } from "../../../utils/utils";
import { bikeColumns } from "../../Common/tableComponents/tableColumns";
import { TableToolbar } from "../../Common/tableComponents/tableToolbar";
import Loading from "./Loading";

function BikeToolbar() {
  return TableToolbar("BikeList");
}

const bikeTableStyle = {
  height: 400,
  width: 900,
  "& .actions": {
    color: "text.secondary"
  },
  "& .textPrimary": {
    color: "text.primary"
  }
};

const BikesTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getBikes() {
      const data = await fetchData("/api/v1/bike/allbikes");
      const transformedBikes = transformBikes(data);
      setRows(transformedBikes);
    }
    getBikes();
  }, []);

  if (rows.length === 0) {
    return <Loading />;
  }

  return (
    <Box sx={bikeTableStyle}>
      <DataGrid
        autoPageSize
        rows={rows}
        columns={bikeColumns}
        slots={{
          toolbar: BikeToolbar
        }}
      />
    </Box>
  );
};

export default BikesTable;
