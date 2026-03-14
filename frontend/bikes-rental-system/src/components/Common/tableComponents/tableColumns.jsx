export const bikeColumns = [
  { field: "id", headerName: "ID", width: 100, editable: false },
  {
    field: "bike_type",
    headerName: "Type",
    width: 350,
    align: "center",
    headerAlign: "center",
    editable: false
  },
  {
    field: "register_date",
    headerName: "Register Date",
    width: 350,
    align: "center",
    headerAlign: "center",
    editable: false
  }
];

export const invoiceColumns = [
  { field: "id", headerName: "ID", width: 100, editable: false },
  {
    field: "gross_amount",
    headerName: "Gross Amount",
    width: 200,
    align: "center",
    headerAlign: "center",
    editable: false
  },
  {
    field: "vat",
    headerName: "Vat",
    width: 200,
    align: "center",
    headerAlign: "center",
    editable: false
  },
  {
    field: "net_amount",
    headerName: "Net Amount",
    width: 200,
    align: "center",
    headerAlign: "center",
    editable: false
  },
  {
    field: "paid",
    headerName: "Paid",
    width: 150,
    align: "center",
    headerAlign: "center",
    editable: false
  }
];
