
import * as path from "path";
import winston from "winston";

export class Logger {
    static DEFAULT_SCOPE = 'app'
    #scope
    loggerInfo: winston.Logger

    constructor(scope) {
        this.#scope = Logger.parsePathToScope(scope ? scope : Logger.DEFAULT_SCOPE)
        this.loggerInfo = winston.createLogger({
            level:'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                }),
                new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
                new winston.transports.File({ filename: 'logs/combined.log' })
            ]
        });
    }

    static parsePathToScope(filepath) {
        if (filepath.indexOf(path.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '')
            filepath = filepath.replace(`${path.sep}src${path.sep}`, '')
            filepath = filepath.replace(`${path.sep}dist${path.sep}`, '')
            //filepath = filepath.replace('.ts', '')
            //filepath = filepath.replace('.js', '')
            filepath = filepath.replace(path.sep, ':')
        }
        return filepath
    }

    _formatScope() {
        return `[${this.#scope}]`
    }

    _log(level, message, args) {
        if (winston) winston[level](`${this._formatScope()} ${message}`, args)
    }

    debug(message, ...args) {
        this.loggerInfo.log('debug', `${this._formatScope()} ${message}`,args)
    }

    info(message, ...args) {
       // this._log('info', message, args)
        this.loggerInfo.log('info', `${this._formatScope()} ${message}`,args)
    }

    warn(message, ...args) {
      //  this._log('warn', message, args)
        this.loggerInfo.log('warn', `${this._formatScope()} ${message}`,args)
    }

    error(message, ...args) {
        this.loggerInfo.log('error', `${this._formatScope()} ${message}`,args)
    }
}
