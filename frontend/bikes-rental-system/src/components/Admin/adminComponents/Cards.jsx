import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Box } from "@mui/material";

const Cards = ({
  color,
  icon,
  mainText,
  mainNumber,
  footerText,
  footerIcon
}) => {
  return (
    <>
      <Box
        width={60}
        height={60}
        sx={{
          backgroundColor: color,
          marginLeft: "1rem",
          position: "relative",
          top: "2.5rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {icon}
      </Box>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                textAlign: "right",
                color: "black",
                fontWeight: "bold"
              }}
            >
              {mainText}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "right"
              }}
            >
              {mainNumber}
            </Typography>
            <Divider />
            <Typography variant="body2" mt={2}>
              {footerIcon} {footerText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
