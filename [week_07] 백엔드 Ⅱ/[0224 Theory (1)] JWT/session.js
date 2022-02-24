const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
    if (!req.session.num) {
        req.session.num = 1;
        req.session.userName = 'first user';
    } else {
        console.log(req.session);
        req.session.num += 1;
    }
    res.send(`you visited our site ${req.session.num} times !`);
});

app.listen(3000, () => {
    console.log('3000 Port open');
});