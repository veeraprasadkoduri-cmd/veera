/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import HeaderBar from "../adminComponents/HeaderBar";
import { Grid } from "@mui/material";
import AddBikeForm from "../adminComponents/AddBikeForm";
import { AlertProvider } from "../../../providers/AlertProvider";
import AdminBikeTypeTable from "../adminComponents/AdminBikeTypeTable";
import Loading from "../adminComponents/Loading";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchEndPoints";
import { useBadge } from "../../../Context/useBadge";

const transformBikeType = (bike) =>
  bike.map((bikeType) => {
    return {
      ...bikeType,
      price_per_minute: `${bikeType.price_per_minute}$`
    };
  });

const AddBike = () => {
  const [bikeTypeData, setBikeTypeData] = useState([]);
  const [isnewBikeAdded, setIsNewBikeAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { badgeCount, incrementBadgeCount } = useBadge();

  useEffect(() => {
    const getAllBikeTypes = async () => {
      setIsLoading(true);
      const bikeTypeData = await fetchData("/api/v1/allBikeTypes");
      const transformedBikeTypes = transformBikeType(bikeTypeData);
      setBikeTypeData(transformedBikeTypes);
      setIsLoading(false);
    };
    getAllBikeTypes();
  }, [isnewBikeAdded]);

  const checkBikeAdded = () => {
    setIsNewBikeAdded((isAdded) => !isAdded);
    incrementBadgeCount();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AlertProvider>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <HeaderBar headTitle={"AddBike"} badgeContent={badgeCount} />
        </Grid>
        <Grid item xs={12} md={8} mt={1}>
          <AddBikeForm checkBikeAdded={checkBikeAdded} />
        </Grid>
        {bikeTypeData.length > 0 && (
          <Grid item>
            <AdminBikeTypeTable bikeTypeData={bikeTypeData} />
          </Grid>
        )}
      </Grid>
    </AlertProvider>
  );
};

export default AddBike;
