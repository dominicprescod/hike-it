var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;


    // creating the public folder client side
    app.use(express.static('public'));


app.get('/getplaces', function(req,res){
  var data  = require("./seed/places.js");
  res.send(data);
});


// port for all incoming connections
    app.listen(port, function(){
      console.log('=============');
      console.log('Hike It on port '+port);
      console.log('=============');
    });
