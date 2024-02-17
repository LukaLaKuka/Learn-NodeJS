import { LogSeverityLevel } from "../../../app/Models/Loggers/Interfaces/LoggerInterface";
import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: [LogSeverityLevel.low, LogSeverityLevel.medium, LogSeverityLevel.high],
        default: 'low',
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    origin: String,
});

export const LogModel = mongoose.model('Log', logSchema);