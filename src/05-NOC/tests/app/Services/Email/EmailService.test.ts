import nodemailer from "nodemailer";
import { EmailService, sendMailOptions } from '../../../../src/app/Services/Email/EmailService';

describe('Email Service Test Suite', () => {

    const mockSendMail = jest.fn();

    nodemailer.createTransport = jest.fn().mockReturnValue({
        sendMail: mockSendMail
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should send a email', async () => {

        const emailService = new EmailService();

        const options: sendMailOptions = {
            to: 'test',
            subject: 'test-subject',
            htmlBody: '<h1>Test Email</h1>',
        };

        await emailService.sendEmail(options);

        expect(mockSendMail).toHaveBeenCalledWith({
            to: options.to,
            subject: options.subject,
            html: options.htmlBody,
            attachments: []
        });
    });

    test('Should send email with Attachments', async () => {
        const emailService = new EmailService();

        await emailService.sendEmailWithFileSystemLogs('user_test');

        expect(mockSendMail).toHaveBeenCalled();
        expect(mockSendMail).toHaveBeenCalledTimes(1);
        expect(mockSendMail).toHaveBeenCalledWith({
            to: 'user_test',
            subject: 'Nuevos Logs de hoy',
            html: `
        <h3>Logs del NOC de hoy:</h3>
        <p style="color: red;">REVISAR SERVICIOS LO ANTES POSIBLE</p>`,
            attachments: [
                { filename: 'logs.log', path: expect.any(String) },
                { filename: 'warning.log', path: expect.any(String) },
                { filename: 'danger.log', path: expect.any(String) }
            ]
        });
    });
});