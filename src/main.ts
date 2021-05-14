import pgdb from './db/pgdb'
import DBInterface from './db/DBInterface'
import AmqpManager from './queueManager'
import Watcher from './watcher'
import startServer from './server'
import { logMessage, Severity, Topic } from './log';

async function start() {
    const db: DBInterface = new pgdb()
    const queue: AmqpManager = new AmqpManager(db)

    while (! await queue.init() ) {
        logMessage(Topic.Init, Severity.Alert, 'AMQP INIT FAILED, WILL RETRY');

        await new Promise((resolve, reject) => { setTimeout(resolve, 3000); });
    }
    startServer()
    await new Watcher(db, queue).start()
}

start()