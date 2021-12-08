const router = require('exoress').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('<h1>Incorrect route</h1>')
});

module.exports = router;