import transporter from "../services/emailService";
import dotenv from 'dotenv';
dotenv.config();


async function sendEmail(to: string, subject: string, text: string){
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to, 
            subject, 
            text,
        });
    }  catch (error) {
        console.error('Error enviando correo:', error);
      }
}

export default { sendEmail };