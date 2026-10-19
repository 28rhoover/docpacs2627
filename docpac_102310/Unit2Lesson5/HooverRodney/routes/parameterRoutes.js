const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/query', (req, res) => {
    const message = req.query.message;
    if (message === "" || message === undefined) {
        res.status(400).render('queryResponse.ejs', {
            pageTitle: "Invalid Query Response!",
            queryResponse: `Please provide a message parameter. \"Example: /query?message=YourMessage\". Your query (the part of the URL that comes AFTER \"query\") of \"${message}\" was invalid.`

        })
    } else {
        const trimmedMessage = message.trim();
        if (trimmedMessage === "") {
            res.status(400).render('queryResponse.ejs', {
                pageTitle: "Invalid Query Response!",
                queryResponse: `Please provide a message parameter. \"Example: /query?message=YourMessage\". Your query (the part of the URL that comes AFTER \"query\") of \"${trimmedMessage}\" was invalid.`
            })
        } else {
            res.render('queryResponse.ejs', {
                pageTitle: "Successful Query Response",
                queryResponse: `Your message is: ${trimmedMessage}`
            })
        }
    }
})

router.get('/urlparams/:paramname', (req, res) => {
    const parameter = req.params.paramname;
    const trimmedParameter = parameter.trim();
    if (trimmedParameter === null || trimmedParameter === "") {
        res.status(400).render('parameterResponse.ejs', {
            pageTitle: "Invalid Parameter Response",
            parameterResponse: "Please provide a URL parameter. Example: '/urlparams/ ' <- your URL parameters go after this bit."
        })
    } else {
        res.send(`<p>Your query parameters are: ${trimmedParameter}</p>`);
        res.render('parameterResponse.ejs', {
            pageTitle: "Successful Parameter Response",
            parameterResponse: `Your query is ${trimmedParameter}`
        })
    }
})

module.exports = router;