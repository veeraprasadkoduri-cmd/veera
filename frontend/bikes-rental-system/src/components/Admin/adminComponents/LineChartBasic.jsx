import { BarChart } from "@mui/x-charts/BarChart";

const LineChartBasic = ({ chartColor, chartLabel }) => {
  const rentalData = [10, 25, 20, 4, 8, 30, 35];
  const days = ["M", "T", "W", "TH", "F", "SA", "SU"];

  return (
    <BarChart
      sx={{
        backgroundColor: chartColor,
        position: "absolute",
        left: "2rem"
      }}
      xAxis={[
        {
          data: days,
          scaleType: "band"
        }
      ]}
      series={[
        {
          data: rentalData,
          area: true,
          showMark: false,
          label: chartLabel,
          color: "white"
        }
      ]}
      width={460}
      height={200}
    />
  );
};

export default LineChartBasic;
