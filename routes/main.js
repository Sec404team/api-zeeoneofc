__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Sec404 Bot',
            namaowner: 'Sec404 Team',
            instagram: 'hr_studio404',
            youtube : 'HR Studio'
        }
    }
    res.json(config)
})

module.exports = router
