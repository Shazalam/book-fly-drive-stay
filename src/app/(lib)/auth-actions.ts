'use server';

import { hash, compare } from 'bcryptjs';
import { randomInt } from 'crypto';

// Mock database - in production, use a real database
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  emailVerified: boolean;
  createdAt: Date;
}

interface VerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

// Mock storage
let users: User[] = [];
let verificationTokens: VerificationToken[] = [];

export async function registerUser(formData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  try {
    // Check if user already exists
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      return { error: 'User already exists with this email' };
    }

    // Hash password
    const hashedPassword = await hash(formData.password, 12);

    // Create user
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: hashedPassword,
      emailVerified: false,
      createdAt: new Date(),
    };

    users.push(user);

    // Generate OTP
    const otp = randomInt(100000, 999999).toString();
    const verificationToken: VerificationToken = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      token: otp,
      expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    };

    verificationTokens.push(verificationToken);

    // In production, send email with OTP
    console.log(`OTP for ${formData.email}: ${otp}`);

    return { success: true, email: formData.email };
  } catch (error) {
    return { error: 'Something went wrong' };
  }
}

export async function verifyEmail(email: string, otp: string) {
  try {
    const token = verificationTokens.find(
      t => t.email === email && t.token === otp && t.expires > new Date()
    );

    if (!token) {
      return { error: 'Invalid or expired OTP' };
    }

    // Mark user as verified
    const user = users.find(u => u.email === email);
    if (user) {
      user.emailVerified = true;
    }

    // Remove used token
    verificationTokens = verificationTokens.filter(t => t.id !== token.id);

    return { success: true };
  } catch (error) {
    return { error: 'Something went wrong' };
  }
}

export async function loginUser(formData: { email: string; password: string }) {
  try {
    const user = users.find(u => u.email === formData.email);
    
    if (!user) {
      return { error: 'Invalid email or password' };
    }

    if (!user.emailVerified) {
      return { error: 'Please verify your email first' };
    }

    const isValidPassword = await compare(formData.password, user.password);
    if (!isValidPassword) {
      return { error: 'Invalid email or password' };
    }

    return { success: true, user: { id: user.id, email: user.email, firstName: user.firstName } };
  } catch (error) {
    return { error: 'Something went wrong' };
  }
}

export async function resendOtp(email: string) {
  try {
    // Remove existing tokens
    verificationTokens = verificationTokens.filter(t => t.email !== email);

    // Generate new OTP
    const otp = randomInt(100000, 999999).toString();
    const verificationToken: VerificationToken = {
      id: Math.random().toString(36).substr(2, 9),
      email: email,
      token: otp,
      expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    };

    verificationTokens.push(verificationToken);

    // In production, send email with OTP
    console.log(`New OTP for ${email}: ${otp}`);

    return { success: true };
  } catch (error) {
    return { error: 'Something went wrong' };
  }
}