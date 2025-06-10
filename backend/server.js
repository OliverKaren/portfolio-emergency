const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let deployments = [
    { id: 1, date: new Date().toISOString(), status: 'success', version: '1.0.0' }
]

app.get('/health', (req, res) => {
    res.json({ status: 'API Running in Docker!', time: new Date() })
})

app.get('/deployments', (req, res) => {
    res.json(deployments)
})

app.post('/deploy', (req, res) => {
    const newDeployment = {
        id: deployments.length + 1,
        date: new Date().toISOString(),
        status: 'success',
        version: `1.0.${deployments.length}`
    }
    deployments.push(newDeployment)
    res.json(newDeployment)
})

app.listen(3000, () => {
    console.log('API running on port 3000')
})
