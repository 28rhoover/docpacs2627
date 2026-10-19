require('dotenv').config();
const express = require('express');
const router = express.Router();
const path = require('path');
const port = process.env.PORT;
const appName = process.env.APP_NAME;

router.get('/', (req, res) => {
    // res.send(`
    //     <h1>Form Page</h1>
    //     <p>A form for creating project admission applications.
    //     <a href="/form">Form Page</a>
    // `);

    res.render('index', {
        pageTitle: "Homepage",
        appName: appName,
        description: "The homepage for the Interest Form and Unit 2 Lesson 5: Dynamic Views with EJS templates"
    });
})

module.exports = router;