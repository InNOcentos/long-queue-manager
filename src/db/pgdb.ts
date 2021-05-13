import { Pool } from 'pg'
import DBInterface from './DBInterface'

import { logMessage, Severity, Topic } from '../log';

const pool: Pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    connectionTimeoutMillis: 60 * 1000,
    idleTimeoutMillis: 60 * 1000,
    max: 30
})

export default class pgdb implements DBInterface {
    test() {
        return 5
    }
}