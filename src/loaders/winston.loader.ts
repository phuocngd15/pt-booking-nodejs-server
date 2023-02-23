import {configure,transports,format} from 'winston'
import process from "process";


export const LoadWinston = () => {
    configure({
        transports: [
            new transports.Console({
                level: 'info',
                handleExceptions: true,
                format:
                    process.env.NODE_ENV !== 'dev'
                        ? format.combine(format.json())
                        : format.combine(format.colorize(), format.simple()),
            }),
        ],
    })
}
