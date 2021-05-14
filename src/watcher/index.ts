import DBInterface from '../db/DBInterface'
import AmqpManager from '../queueManager'
import {defaultStatisticsTimer, test, test1} from '../constants'

export default class Watcher {
    db: DBInterface
    queue: AmqpManager

    constructor(db: DBInterface, queue: AmqpManager){
        this.db = db
        this.queue = queue
    }
    
    private async getStatistics() {
        console.log(1)
        return 1;
    }

    private async test() {
        console.log(2)
        return 1;
    }

    private async test1() {
        console.log(3)
        return 1;
    }

    async start() {
        try {
            this.deferrerExec(this.getStatistics, defaultStatisticsTimer)
            this.deferrerExec(this.test, test)
            this.deferrerExec(this.test1, test1)
        } catch (e) {
            return console.log(e)
        }
    }

    deferrerExec (cb: any, time: number) {
        setTimeout(async function exec() {
            await cb()
            setTimeout(exec, 1000 * time)
        }, 1000 * time)
    }
}