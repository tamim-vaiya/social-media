import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
}}));

const Post = (props) => {
  const {title, body, id, userId} = props.post;
  const classes = useStyles();
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
        m={1}
        css={{ height: 10 }}
      ></Box>
     <Box p={1} >
     <Card className={classes.root}>
     <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userId}
          </Avatar>
        }
        action={
          <i><small>{"Post no."+id}</small></i>
        }
          title= "User Name"
          subheader="Date of Published"
      />
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>{title}</strong>
          <p>{body}</p>
          <Button variant="outlined"> <Link
          style={{ textDecoration: 'none',color:"gray" }}
          to={`/post/${id}`} >Comments</Link> </Button>
        </Typography>
      </CardContent>
     </Card>
        </Box>
    </div>
  );
};

export default Post;


