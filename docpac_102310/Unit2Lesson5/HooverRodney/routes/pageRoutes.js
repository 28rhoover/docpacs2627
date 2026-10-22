require('dotenv').config();
const express = require('express');
const router = express.Router();
const path = require('path');
const port = process.env.PORT;
const appName = process.env.APP_NAME;

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: "Homepage",
        appName: appName,
        description: "The homepage for the Interest Form and Unit 2 Lesson 5: Dynamic Views with EJS templates"
    });
})

router.get('/features', (req, res) => {
    const lessons = [
        {
            linkText: "Lesson 1",
            url: "/",
            description: "Introduced Express to the operation of the server — replacing the previously-used HTTP server code and decreasing the amount of work that it initially took to debug the site! What remains of the original Express-implementation is now found in what's now the homepage!"
        },
        {
            linkText: "Lesson 2",
            url: "/",
            description: "Introduced Express routing to the operation of the server, which made the process of adding new routes and allowed easier processing of POST requests from the form page!"
        },
        {
            linkText: "Lesson 3",
            url: "/",
            description: "Introduced request logging, and organized modules! This prevented all of the code from having to run from the server code!"
        },
        {
            linkText: "Lesson 4",
            url: "/",
            description: "Organized request routes into separate modules! This stops the server script from running all of the routing code —allowing the server script to focus on configuring middleware, mounting routers, and starting the server! It also just makes things easier to look through in the event of a route failing!"
        }
    ];
    res.render('lessons', {
        pageTitle: "Lesson Features",
        pageDesc: "What each lesson introduced to this website!",
        lessons: lessons
    })
})

module.exports = router;