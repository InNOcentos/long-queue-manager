import amqp from 'amqplib'
import DBInterface from './db/DBInterface'

export default class AmqpManager {
    channel: amqp.Channel | null = null;
    db: DBInterface

    constructor (db: DBInterface) {
        this.db = db
    }


    async init() {
        try {

        } catch (e) {

        }
        
        return true
    }
}