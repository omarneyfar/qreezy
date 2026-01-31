import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { businessName, businessType, fullName, email, city, solutions, message } = body;

        // Validate required fields
        if (!businessName || !businessType || !fullName || !email || !city) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create nodemailer transporter with Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.BREVO_SMTP_HOST,
            port: Number(process.env.BREVO_SMTP_PORT),
            secure: false, // true for 465, false for other ports
            requireTLS: true, // Force STARTTLS
            auth: {
                user: process.env.BREVO_SMTP_USER,
                pass: process.env.BREVO_SMTP_KEY,
            },
            tls: {
                rejectUnauthorized: false // Accept self-signed certificates
            }
        });

        // Prepare solutions list
        const solutionsList = solutions && solutions.length > 0
            ? solutions.join(', ')
            : 'Non spécifié';

        // Email content to business owner
        const mailOptions = {
            from: `"${process.env.BREVO_FROM_NAME}" <${process.env.BREVO_FROM_EMAIL}>`,
            to: process.env.BREVO_FROM_EMAIL, // Send to contact@qreezy.tn
            replyTo: email, // Client's email for easy reply
            subject: `Nouvelle demande de devis - ${businessName}`,
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
              <h1 style="margin: 0; font-size: 28px;">📧 Nouvelle Demande de Devis</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">🏢 Nom de l'entreprise</div>
                <div class="value">${businessName}</div>
              </div>
              
              <div class="field">
                <div class="label">🏪 Type d'établissement</div>
                <div class="value">${businessType}</div>
              </div>
              
              <div class="field">
                <div class="label">👤 Nom Complet</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #FF6B6B;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📍 Ville / Pays</div>
                <div class="value">${city}</div>
              </div>
              
              <div class="field">
                <div class="label">🎯 Solutions intéressées</div>
                <div class="value">${solutionsList}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>Cette demande a été envoyée depuis <strong>qreezy.tn</strong></p>
                <p>Répondez directement à cet email pour contacter le client</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
Nouvelle demande de devis

Entreprise: ${businessName}
Type: ${businessType}
Contact: ${fullName}
Email: ${email}
Ville: ${city}
Solutions: ${solutionsList}
${message ? `Message: ${message}` : ''}

Répondez à cet email pour contacter le client.
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Optional: Send confirmation email to client
        const clientMailOptions = {
            from: `"${process.env.BREVO_FROM_NAME}" <${process.env.BREVO_FROM_EMAIL}>`,
            to: email,
            subject: 'Votre demande de devis a été reçue - Qreezy',
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
              <h1 style="margin: 0; font-size: 28px;">✅ Merci ${fullName} !</h1>
            </div>
            <div class="content">
              <p style="font-size: 16px;">Nous avons bien reçu votre demande de devis pour <strong>${businessName}</strong>.</p>
              
              <p style="font-size: 16px;">Notre équipe l'étudiera attentivement et vous recontactera dans les <strong>24h</strong> pour discuter de votre projet et vous proposer une solution adaptée.</p>
              
              <p style="font-size: 16px;">En attendant, n'hésitez pas à visiter notre site : <a href="https://qreezy.tn" style="color: #FF6B6B;">qreezy.tn</a></p>
              
              <div class="footer">
                <p><strong>Qreezy</strong> - Solutions digitales pour restaurants et commerces</p>
                <p>contact@qreezy.tn</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
Bonjour ${fullName},

Nous avons bien reçu votre demande de devis pour ${businessName}.

Notre équipe l'étudiera attentivement et vous recontactera dans les 24h pour discuter de votre projet.

Cordialement,
L'équipe Qreezy
contact@qreezy.tn
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
