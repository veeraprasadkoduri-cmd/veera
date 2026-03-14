import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchEndPoints";
import { transformInvoices } from "../../../utils/utils";
import { invoiceColumns } from "../../Common/tableComponents/tableColumns";
import { TableToolbar } from "../../Common/tableComponents/tableToolbar";

function invoiceToolbar() {
  return TableToolbar("Latest Invoices");
}

const invoiceTableStyle = {
  height: 400,
  width: 900,
  "& .actions": {
    color: "text.secondary"
  },
  "& .textPrimary": {
    color: "text.primary"
  },
  "& .paid": {
    backgroundColor: "lightgreen"
  }
};

const InvoicesTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getAllInvoices = async () => {
      const data = await fetchData("/api/v1/invoices/getAllInvoices");
      const transformedInvoice = transformInvoices(data);
      setRows(transformedInvoice);
    };
    getAllInvoices();
  }, []);

  return (
    <Box sx={invoiceTableStyle}>
      <DataGrid
        autoPageSize
        rows={rows}
        columns={invoiceColumns}
        getRowClassName={(params) => (params.row.paid === "YES" ? "paid" : "")}
        slots={{
          toolbar: invoiceToolbar
        }}
      />
    </Box>
  );
};

export default InvoicesTable;
