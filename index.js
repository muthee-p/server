const express = require('express')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models')

//routers
const diseasesRouter = require('./routes/Diseases')
app.use('/Diseases', diseasesRouter);

const citizensRouter = require('./routes/Citizens')
app.use('/Citizens', citizensRouter);

const healthRouter = require('./routes/Health')
app.use('/Health', healthRouter);

const crimeRouter = require('./routes/Crime')
app.use('/Crimes', crimeRouter);

const tradeRouter = require('./routes/Trade')
app.use('/Trades', tradeRouter);

const transportRouter = require('./routes/Transport')
app.use('/Transports', transportRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
    console.log('server okay');
});
});

