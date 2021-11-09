const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')


app = express();

const storage = multer.diskStorage({
  destination: function(req, file, callBack){
    callBack(null, './upload')
  },
  filename: function(req, file, callBack){
    callBack(null, file.originalname)
  },
})

const upload = multer({storage: storage}).single('myfile');

app.post('/', function(req, res) {
  upload(req, res, (err) => {
    if(err){
      res.send('file upload faid')
    }else {
      res.send('file upload success')
    }
  })
})

app.listen(8000, () => {
  console.log("Server is running successfully");
});
