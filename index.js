let express = reqiure('express')
let app = express();

app.get('/', (req, res) => {

   res.send("Hi");

})

app.listen(8000,  () => console.log("Server is running") );