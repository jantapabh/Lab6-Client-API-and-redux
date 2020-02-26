let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let bears = [{ 
    'id': 0, 'name': 'pooh', 'weight': 211 },
    { 'id': 1, 'name': 'vinnie', 'weight': 111 }
];

router.route('/bears').get((req, res) => res.json(bears));

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running"));