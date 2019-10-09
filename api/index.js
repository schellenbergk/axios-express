import express from "express"
import news from "./routes/news"

const app = express()

app.use(news)

app.get('/', (req, res, next) => {
  res.send('API v1.0')
})

export default {
  path: '/api',
  handler: app
}
