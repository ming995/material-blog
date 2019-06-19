import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const WrapperStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardStyle = styled(Card)`
    margin-top: 10%;
    height: 31.25rem;
`;

const useStyles = makeStyles({
    card: {
      maxWidth: 400,
    },
});

// const classes = styles123();

export default function About() {
    const classes = useStyles();
  
    return (
      <WrapperStyle>  
        <CardStyle className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="320"
              image="https://avatars1.githubusercontent.com/u/46031112?s=460&v=4"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Ming995
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span>Member of HelloGitHub / <span role="img" aria-label="man_technologist">👨‍💻 </span> coder / <span role="img" aria-label = "shallow_pan_of_food">🥘 </span> like </span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" href="https://hellogithub.com/" color="primary">
              HelloGitHub
            </Button>
            <Button size="small" href="https://github.com/ming995" color="primary">
              ME
            </Button>
          </CardActions>
        </CardStyle>
      </WrapperStyle>
    );
}