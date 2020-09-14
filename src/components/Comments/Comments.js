import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';


const Comments = () => {
  
const {id} = useParams();


const [mainPost, setMainPost] = useState([]);
const [comment, setComment] = useState([]);
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res => res.json())
  .then(data => setMainPost(data))
},[])
useEffect(() => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  fetch(url)
  .then( response => response.json())
  .then(data => {
          setComment(data)
  });
}, []);

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  }
}));
const classes = useStyles();
  return (
    <div>
      <div className="main-post">
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
            {mainPost.userId}
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
          <strong>{mainPost.title}</strong>
          <p>{mainPost.body}</p>
        </Typography>
      </CardContent>
     </Card>
        </Box>
      </div>
      <div className="comment-section">
        <h4 style={{textAlign: "center"}}>Comments</h4>
      {
        comment.map(comment => <Comment
        key = {comment.id}
        comment = {comment}
        ></Comment>)
      }
      </div>
    </div>
  );
};

export default Comments;