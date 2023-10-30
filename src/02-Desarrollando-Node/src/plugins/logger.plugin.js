const winston = require('winston');
const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'src/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'src/logs/info.log', level: 'info' }),
        new winston.transports.File({ filename: 'src/logs/combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

const buildLogger = (service) => {
    return {
        log: (message) => {
            logger.log('info', message, service)
        },
        error: (message) => {
            logger.log('error', { message, service })
        }
    }
}

module.exports = {
    buildLogger,
}