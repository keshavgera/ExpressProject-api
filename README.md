

create Folder and open it into VScode

npm init -y
npm i express
npm i -g nodemon

For run this application

node index.js 


For start server automatically 
nodemon index.js      


https://www.youtube.com/watch?v=7H_QH9nipNs


https://github.com/ericf/express-handlebars

add this code into index.js

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);

