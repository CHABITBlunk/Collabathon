const express = require('express')
const app = express()
const routesReport = require('rowdy-logger').begin(app)
const cors = require('cors')

app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
    routesReport.print();
});