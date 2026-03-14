import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import LineChartBasic from "./LineChartBasic";

const ChartCard = ({ chartColor, title, text, footerText, chartLabel }) => {
  return (
    <>
      <Card
        sx={{
          width: 500
        }}
      >
        <LineChartBasic chartColor={chartColor} chartLabel={chartLabel} />

        <CardActionArea>
          <CardContent sx={{ marginLeft: "1rem" }}>
            <Typography
              variant="body2"
              sx={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "left"
              }}
            >
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                margin: "1rem 0"
              }}
            >
              {text}
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              mt={2}
              sx={{
                color: "green"
              }}
            >
              {footerText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ChartCard;
