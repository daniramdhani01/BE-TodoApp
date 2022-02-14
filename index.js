const express = require('express')

const app = express()

const cors = require('cors')


app.use(express.json())
app.use(cors())

const router = require('./src/routes')

app.use("/api/v1", router)

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('hai danii, kamu dapat project baruu')
})

app.listen(port, () => console.log(`listening on port ${port}!`))