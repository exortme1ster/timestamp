var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { json } = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api", (req,res) => {
  const curDate = new Date();
  res.json({
    unix: curDate.valueOf(),
    utc: curDate.toUTCString()
  });

});

app.get("/deveastern", (req, res)=> {
    res.send("so...u r curious ... ok. => add something to link that will lead u to somewhere...")

})

app.get("/deveastern/:egg", (req, res)=> {
    let code = req.params.egg;

    if(parseInt(code) == 11001) {
      res.json({
        hint:"wow. here is your next task:−−• −−− •−• • •−•• −−−   •••••   ••−•• •−•• • −•− − •−• •• −−−• • ••• −•− •• ••••   •−•• •− −− •−−• −−− −−−• • −•− •−•−•−   − •−• ••   •−•• •− −− •−−• −−− −−−• −•− ••   •−− −•−− −•− •−•• ••−− −−−• •• •−•• •• ••••••   ••• −•− −−− •−•• −••− −•− −−−   •−•• •− −− •−−• −−− −−−• • −•−   −−− ••• − •− •−•• −−− ••• −••− ••−−•• "
      })
    } else {
      res.json({
        result:"not smart enough."
      })
    }
})


app.get("/api/:date", (req, res)=> {
  let tempDate = req.params.date;
  if(/^\d*$/.test(tempDate)) {
    tempDate = parseInt(tempDate);
  }

  const date = new Date(tempDate);

  if(date.toString() == "Invalid Date"){
    res.json({
      "error":"Invalid Date"
    });
  } else {
    res.json({
      unix: date.valueOf(),
      utc:  date.toUTCString()
    });
  }

});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
