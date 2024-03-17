import express from 'express'
import moviesRouter from './routes/movies'

const app = express()
const port = 4000

app.use(express.json())

app.use('/api/movies', moviesRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
