import { UUID } from "crypto";

const { v4: uuidv4 } = require('uuid');

const generateUUID = (): UUID => uuidv4();

export {
    generateUUID,
}