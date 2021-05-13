import express from 'express'

export default function startServer() {
    const app = express()
    app.use(express.json())

    app.listen(4567, ()=> {
        console.log('Listening on 80 port')
    })
}