import DBInterface from '../db/DBInterface'
import AmqpManager from '../queueManager'

export default class Watcher {
    db: DBInterface
    amqp: AmqpManager

    constructor(db: DBInterface, amqp: AmqpManager){
        this.db = db
        this.amqp = amqp
    }
    
    private async getStatistics() {
        return 1;
    }

    private async () {
        return 1;
    }

    private async fdg() {
        return 1;
    }

    start() {
        setInterval(async ()=> {
            try {
                const number = await this.getStatistics()
                console.log(number)
            } catch (e) {
                console.log(e)
            }
        }, 1000 * 5)
    }

    async execInterval() {
        
    }

    
}