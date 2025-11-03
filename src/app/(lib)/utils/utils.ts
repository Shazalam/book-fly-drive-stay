import { randomInt } from 'crypto';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export function generateOtp(): string {
  return randomInt(100000, 999999).toString();
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token: string): { userId: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
}

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwt.decode(token) as { exp: number } | null;
    if (!decoded) return true;
    return Date.now() >= decoded.exp * 1000;
  } catch {
    return true;
  }
}