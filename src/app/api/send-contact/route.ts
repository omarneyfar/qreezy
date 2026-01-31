import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create nodemailer transporter with Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.BREVO_SMTP_HOST,
            port: Number(process.env.BREVO_SMTP_PORT),
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.BREVO_SMTP_USER,
                pass: process.env.BREVO_SMTP_KEY,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email content to business owner
        const mailOptions = {
            from: `"${process.env.BREVO_FROM_NAME}" <${process.env.BREVO_FROM_EMAIL}>`,
            to: process.env.BREVO_FROM_EMAIL,
            replyTo: email,
            subject: `Nouveau message de contact - ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #FF6B6B; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #FF6B6B; }
            .footer { text-align: center; margin-top: 30px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">📧 Nouveau Message de Contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nom</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #FF6B6B;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📝 Sujet</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              
              <div class="footer">
                <p>Ce message a été envoyé depuis <strong>qreezy.tn/contact</strong></p>
                <p>Répondez directement à cet email pour contacter l'expéditeur</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}

Répondez à cet email pour contacter l'expéditeur.
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send confirmation email to customer
        const clientMailOptions = {
            from: `"${process.env.BREVO_FROM_NAME}" <${process.env.BREVO_FROM_EMAIL}>`,
            to: email,
            subject: 'Votre message a été reçu - Qreezy',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 30px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Merci ${name} !</h1>
            </div>
            <div class="content">
              <p style="font-size: 16px;">Nous avons bien reçu votre message concernant : <strong>${subject}</strong>.</p>
              
              <p style="font-size: 16px;">Notre équipe vous recontactera dans les <strong>24h</strong> pour répondre à votre demande.</p>
              
              <p style="font-size: 16px;">En attendant, n'hésitez pas à visiter notre site : <a href="https://qreezy.tn" style="color: #FF6B6B;">qreezy.tn</a></p>
              
              <div class="footer">
                <p><strong>Qreezy</strong> - Solutions digitales pour restaurants et commerces</p>
                <p>contact@qreezy.tn | +216 44785090</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
Bonjour ${name},

Nous avons bien reçu votre message concernant : ${subject}.

Notre équipe vous recontactera dans les 24h pour répondre à votre demande.

Cordialement,
L'équipe Qreezy
contact@qreezy.tn | +216 44785090
      `,
        };

        await transporter.sendMail(clientMailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
