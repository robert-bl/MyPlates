const express = require('express')
const cors = require('cors')


const PORT =process.env.PORT || 3001

const app = express()

const AppRouter = require('./routes/AppRouter')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)



app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))