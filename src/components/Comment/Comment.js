import { Avatar, Box, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';

import React from 'react';
import Image from '../Images/Images';

const Comment = (props) => {
  const {postId, id,name,body} = props.comment;
  return (
    <>
     <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
        m={1}
        css={{ height: 10 }}
      ></Box>
     <Box p={1} >
     <Card >
     <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ height: "50px", width: "50px"}}>
            <Image></Image>
          </Avatar>
        }
          title= {name}
          subheader={id + "/" + postId}
      />
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{body}</p>
        </Typography>
      </CardContent>
     </Card>
        </Box>
    </>
  );
};

export default Comment;