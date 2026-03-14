/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { fetchData } from "../../../utils/fetchEndPoints";
import { useAlert } from "../../../Context/useAlert";
import Modal from "./AdminModal";
import Box from "@mui/material/Box";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons
} from "@mui/x-data-grid";

function EditToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "start",
        backgroundColor: "#962dae",
        color: "white"
      }}
    >
      <Typography component="p" variant="p" margin={2}>
        Modify Bike Types
      </Typography>
    </GridToolbarContainer>
  );
}

function AdminBikeTypeTable({ bikeTypeData }) {
  const [rows, setRows] = useState(bikeTypeData);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bikeToDelete, setBikeToDelete] = useState({});

  const { showAlert } = useAlert();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handlePressOk = async () => {
    if (bikeToDelete.id !== null) {
      setRows(rows.filter((row) => row.id !== bikeToDelete.id));
      const responseDeletedBikeType = await fetchData(
        `/api/v1/bikeType/${bikeToDelete.id}`,
        "DELETE"
      );
      if (responseDeletedBikeType !== undefined) {
        showAlert(`${responseDeletedBikeType?.successMessage}`, "success");
      }
      setBikeToDelete({});
      setIsModalOpen(false);
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    const getRowDescription = rows.filter((currentRow) =>
      currentRow.id === id ? currentRow.description : null
    );
    setIsModalOpen(true); //modal open active, state function updated
    setBikeToDelete({
      ...bikeToDelete,
      id,
      description: getRowDescription[0].description
    });
  };

  const handleCancelClick = (id) => () => {
    console.log("handleCancelClick ", id);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleProcessRowUpdateError = useCallback((error) => {
    if (error.status === 500) {
      showAlert(`${error.message}`, "error");
    }
  }, []);

  const processRowUpdate = async (newRow) => {
    console.log("executed processRowUpdate");
    const updatedRow = newRow;
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    let responseBikeType = null;
    //body to send to backend

    const transformedBikeType = {
      description: updatedRow.description,
      info: updatedRow.info,
      price_per_minute: parseInt(updatedRow.price_per_minute)
    };
    responseBikeType = await fetchData(
      `/api/v1/bikeType/${updatedRow.id}`,
      "PUT",
      transformedBikeType
    );
    //here we need to call again addNotification
    if (responseBikeType.updateMessage !== undefined) {
      showAlert(`${responseBikeType?.updateMessage}`, "success");
    } else {
      showAlert(`${responseBikeType.message}`, "error");
    }
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  //here we define the table columns
  const columns = [
    { field: "id", headerName: "id", width: 100, editable: false },
    {
      field: "description",
      headerName: "description",
      width: 200,
      align: "left",
      headerAlign: "left",
      editable: true
    },
    {
      field: "info",
      headerName: "information",
      width: 200,
      align: "left",
      headerAlign: "left",
      editable: true
    },
    {
      field: "price_per_minute",
      headerName: "price_per_minute",
      width: 150,
      align: "center",
      headerAlign: "left",
      editable: true
    },
    {
      field: "actions",
      type: "actions",
      align: "center",
      headerAlign: "center",
      headerName: "actions",
      width: 180,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "green"
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={
                <CancelIcon
                  sx={{
                    color: "red"
                  }}
                />
              }
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon sx={{ color: "#962dae" }} />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon sx={{ color: "red" }} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />
        ];
      }
    }
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .actions": {
          color: "text.secondary"
        },
        "& .textPrimary": {
          color: "text.primary"
        }
      }}
    >
      <DataGrid
        autoPageSize
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handlePressOK={handlePressOk}
        title={`Confirm bikeType deletion`}
        modalContent={`Are you sure you want to delete record ${bikeToDelete.description}?`}
      />
    </Box>
  );
}

export default AdminBikeTypeTable;
