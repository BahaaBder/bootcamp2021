const posts = [
   {
     id: 1, 
     text: "Love this product",
     comments: []
   },
   { 
     id: 2, 
     text: "This is the worst. DON'T BUY!", 
     comments: [
                 {id: 1, text: "Idiot has no idea"}, 
                 {id: 2, text:"Fool!"}, 
                 {id: 3, text: "I agree!"}
               ]
    },
    {
     id: 3, 
     text: "So glad I found this. Bought four already!",
     comments: []
    }
 ]
 for (let key in posts){
   if(posts[key].id==2){
      for (let commentId in posts[key].comments){
         if(posts[key].comments[commentId].id==3){
            posts[key].comments.splice(commentId,commentId)   
         }
      }
   }
}