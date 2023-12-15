const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const generalRoutes = require('./routes/generalRoutes');

// initialize app
const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const public = path.join(__dirname,'public');
app.use(express.static(public));

app.use(bodyParser.urlencoded({extended: false}));

// configure session
app.use(session({
  secret: 'myS3cr3tK3y',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use("/events", eventRoutes);
app.use("/auth", userRoutes);
app.use("/", generalRoutes);


app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});