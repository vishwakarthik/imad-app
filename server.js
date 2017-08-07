var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleone': {
    title: "Article One | Vishwa Karthik",
    heading: "Article One",
    date: "August 7 2017",
    content: `
    <p> 
    This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article 
     </p>
    <p> This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
    </p>
    
    <p> This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article 
    </p>
    `
},
    'articletwo': {
title: "Article Two | Vishwa Karthik",
heading: "Article Two",
date: "August 7 2017",
content: ` 
<p> 
This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article </p>
<p> 
This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article This is the content for my second article 
</p>
`
},
    'articlethree': { 
title: "Article Three | Vishwa Karthik",
heading: "Article Three",
date: "August 7 2017",
content: `
<p> 
This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article
</p>
<p> 
This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article This is the content for my third article
</p>
`
},
};
function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
  var htmltemplate = `
    <html>
    <head>
           <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
     <body>
         <div class="container">
         <div>
             <a href="/">Home</a>
         </div> 
         <hr/>
         <h3>
             ${heading}
         </h3>
         <div>
             ${date}
         </div>
         <div>
            ${content} 
         </div>
     </body>
</html>
`
;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articlename', function (req, res) {
    // articlename == articleone
    // articles[articlename] == {} content object of article one
    var articlename = req.params.articlename; 
 res.send(createtemplate(articles[articlename]));    
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
