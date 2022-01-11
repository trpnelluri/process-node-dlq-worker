'use strict'

const processDLQ = require('../services/dlq-execute-command')
const processReceiveMessage = require('../services/receive-and-process-dlq-messages')
const loggerUtils = require('../sharedLib/common/logger-utils');

const EventName = 'DLQWORKERCONTROLLER'
let logParams = {};

const logger = loggerUtils.customLogger( EventName, logParams);

exports.default = (req, res) => {
    logger.info(`default req.headers: ${JSON.stringify(req.headers)}`)
    res.send('Welcome to Unissant');
};

exports.processAuditDLQ = (req, res) => {
    logger.info(`processAuditDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_audit_queue
    let targetQueue = process.env.main_audit_queue
    logger.debug(`processAuditDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processEmailDLQ = (req, res) => {
    logger.info(`processEmailDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_email_queue
    let targetQueue = process.env.main_email_queue
    logger.debug(`processEmailDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processEporStatusDLQ = (req, res) => {
    logger.info(`processEporStatusDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_epor_status_queue
    let targetQueue = process.env.main_epor_status_queue
    logger.debug(`processEporStatusDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processMetadataDLQ = (req, res) => {
    logger.info(`processMetadataDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_metadata_processor_queue
    let targetQueue = process.env.main_metadata_processor_queue
    logger.debug(`processMetadataDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processPayloadProcessDLQ = (req, res) => {
    logger.info(`processPayloadProcessDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_payload_processor_queue
    let targetQueue = process.env.main_payload_processor_queue
    logger.debug(`processPayloadProcessDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processTransactionDLQ = (req, res) => {
    logger.info(`processTransactionDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_transaction_queue
    let targetQueue = process.env.main_transaction_queue
    logger.debug(`processTransactionDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

exports.processHIHNotificationsDLQ = (req, res) => {
    logger.info(`processHIHNotificationsDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_2_hih_notifications_queue
    let targetQueue = process.env.main_hih_notifications_queue
    logger.debug(`processHIHNotificationsDLQ sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processDLQ.executeDLQCommand(res, logger, sourceQueue, targetQueue)
};

//temp:
exports.processHIHNotificationsDLQ1 = (req, res) => {
    logger.info(`processHIHNotificationsDLQ req.headers: ${JSON.stringify(req.headers)}`)
    let sourceQueue = process.env.dlq_hih_notifications_queue
    let targetQueue = process.env.main_hih_notifications_queue
    logger.debug(`processHIHNotificationsDLQ1 sourceQueue: ${sourceQueue} targetQueue: ${targetQueue}`)
    processReceiveMessage.receiveMsgFromDLQ();
};
