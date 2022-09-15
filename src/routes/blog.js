const express = require('express');
const router = express.Router();

router.get('/CDL-Endorsements-and-Restrictions', (req, res) => {
    res.render('./blogs/CDL-Endorsements-and-Restrictions')
})
router.get('/CDL-Federal-Requirements', (req, res) => {
    res.render('./blogs/CDL-Federal-Requirements')
})
router.get('/How-long-does-it-take-to-get-a-CDL-in-2022', (req, res) => {
    res.render('./blogs/How-long-does-it-take-to-get-a-CDL-in-2022')
})
router.get('/Steps-Required-to-Get-a-CDL-License-in-2022', (req, res) => {
    res.render('./blogs/Steps-Required-to-Get-a-CDL-License-in-2022')
})
router.get("/what-is-a-commercial-driver's-license", (req, res) => {
    res.render("./blogs/what-is-a-commercial-driver's-license")
})
router.get('/', (req, res) => {
    res.render('./blogs/blog')
})

module.exports = router;