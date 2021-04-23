import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles';

const NewsCard= ({article:{ description, publishedAt, source, title, url, urlToImage},i})=> {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F742%2F478%2Fpng-transparent-express-news-pakistan-daily-express-92-news-others-miscellaneous-television-text-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsamaa%2BTv&tbnid=BAHDw5lb-OOneM&vet=12ahUKEwjv7rSv4ZHwAhV0geYKHXkVBK0QMygWegUIARDkAQ..i&docid=VAgJi532DI7N-M&w=360&h=180&q=news%20png%20thumbnail&ved=2ahUKEwjv7rSv4ZHwAhV0geYKHXkVBK0QMygWegUIARDkAQ'}/>
                <div>
                <Typography varient = "body2" color="textSecondary" component= "h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography varient = "body2" color="textSecondary" component= "h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom varient = "h5">{title}</Typography>
                <CardContent>
                    <Typography varient="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions>
                <Button size = "small" color="primary">Learn More</Button>
                <Typography variant= "h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
