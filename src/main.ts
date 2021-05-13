import pgdb from './db/pgdb'
import DBInterface from './db/DBInterface'
import AmqpManager from './queueManager'
import Watcher from './watcher'
import startServer from './server'

async function start() {
    const db: DBInterface = new pgdb()
    const queue: AmqpManager = new AmqpManager(db)

    startServer()
    await new Watcher(db, queue).start()
}

start()