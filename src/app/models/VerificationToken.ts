import mongoose, { Document, Schema } from 'mongoose';

export interface IVerificationToken extends Document {
  email: string;
  token: string;
  expires: Date;
  createdAt: Date;
}

const verificationTokenSchema = new Schema<IVerificationToken>({
  email: {
    type: String,
    required: true,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // 10 minutes in seconds
  },
});

// Compound index for faster queries
verificationTokenSchema.index({ email: 1, token: 1 });

export default mongoose.models.VerificationToken || 
  mongoose.model<IVerificationToken>('VerificationToken', verificationTokenSchema);