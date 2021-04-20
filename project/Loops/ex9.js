
const posts = [
   {id: 1, text: "Love this product"},
   {id: 2, text: "This is the worst. DON'T BUY!"},
   {id: 3, text: "So glad I found this. Bought four already!"}
 ]
 for (let key in posts){
    if(posts[key].id==2){
       posts.splice(key,key)
    }
 }
 console.log(posts)
