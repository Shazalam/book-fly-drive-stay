// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();

//     const {
//       name,
//       email,
//       phone,
//       location,
//       checkIn,
//       checkOut,
//       guests,
//     } = data;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Hotel Reservation" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_RECEIVER,
//       subject: 'New Hotel Reservation',
//       html: `
//         <h2>New Reservation</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Location:</strong> ${location}</p>
//         <p><strong>Check-in:</strong> ${checkIn}</p>
//         <p><strong>Check-out:</strong> ${checkOut}</p>
//         <p><strong>Guests:</strong> ${guests}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: 'Reservation sent successfully.' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending reservation email:', error);
//     return NextResponse.json({ message: 'Email failed to send.' }, { status: 500 });
//   }
// }
// Force Node.js runtime
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      location,
      checkIn,
      checkOut,
      guests,
    } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Hotel Reservation" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER,
      subject: 'New Hotel Reservation',
      html: `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests}</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Reservation sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending reservation email:', error);
    return NextResponse.json({ message: 'Email failed to send.' }, { status: 500 });
  }
}
