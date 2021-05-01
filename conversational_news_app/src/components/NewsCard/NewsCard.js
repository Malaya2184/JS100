import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';

const NewsCard= ({article:{ description, publishedAt, source, title, url, urlToImage},i, activeArticle})=> {
    const classes = useStyles();
    return (
        <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea hre={url} targe='_blank'>
                <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F742%2F478%2Fpng-transparent-express-news-pakistan-daily-express-92-news-others-miscellaneous-television-text-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsamaa%2BTv&tbnid=BAHDw5lb-OOneM&vet=12ahUKEwjv7rSv4ZHwAhV0geYKHXkVBK0QMygWegUIARDkAQ..i&docid=VAgJi532DI7N-M&w=360&h=180&q=news%20png%20thumbnail&ved=2ahUKEwjv7rSv4ZHwAhV0geYKHXkVBK0QMygWegUIARDkAQ'}/>
                <div className ={classes.details}>
                <Typography varient = "body2" color="textSecondary" component= "h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography varient = "body2" color="textSecondary" component= "h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom varient = "h5">{title}</Typography>
                <CardContent>
                    <Typography varient="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardAction}>
                <Button size = "small" color="primary">Learn More</Button>
                <Typography variant= "h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
