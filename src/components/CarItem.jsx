import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Link.css"

const CarItem = ({car, setVisible, setSelectedCar}) => {
    const { image, title, model, releaseYear, rentPrice } = car;
    return (
      <Card sx={{ maxWidth: 400, minWidth: 380, marginTop:"20px"}}>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Год выпуска: {releaseYear.substring(0,4)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Стоимость: {rentPrice} руб/сутки
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {setVisible(true); setSelectedCar(car);}} size="small" sx={{textDecoration: "none",position: "inherit", color: "DarkSlateGray", fontSize: "15px"}}>
          Арендовать
        </Button>
      </CardActions>
      </Card>
    )
};

export default CarItem;