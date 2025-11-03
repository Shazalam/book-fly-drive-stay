// import mongoose, { Document, Schema } from 'mongoose';
// import bcrypt from 'bcryptjs';

// export interface IUser extends Document {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   emailVerified: boolean;
//   avatar?: string;
//   createdAt: Date;
//   updatedAt: Date;
//   comparePassword(candidatePassword: string): Promise<boolean>;
// }

// const userSchema = new Schema<IUser>(
//   {
//     firstName: {
//       type: String,
//       required: [true, 'First name is required'],
//       trim: true,
//       maxlength: [50, 'First name cannot be more than 50 characters'],
//     },
//     lastName: {
//       type: String,
//       required: [true, 'Last name is required'],
//       trim: true,
//       maxlength: [50, 'Last name cannot be more than 50 characters'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       match: [
//         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//         'Please enter a valid email',
//       ],
//     },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//       minlength: [6, 'Password must be at least 6 characters'],
//     },
//     emailVerified: {
//       type: Boolean,
//       default: false,
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
  
//   try {
//     const salt = await bcrypt.genSalt(12);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error: unknown) {
//     next(error);
//   }
// });

// // Compare password method
// userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// // Remove password from JSON output
// userSchema.methods.toJSON = function () {
//   const user = this.toObject();
//   delete user.password;
//   return user;
// };

// export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);






import mongoose, { Document, Schema, CallbackError } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  emailVerified: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot be more than 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: unknown) {
    // Convert unknown error to proper Mongoose error type
    if (error instanceof Error) {
      next(error as CallbackError);
    } else {
      next(new Error('Unknown error occurred during password hashing') as CallbackError);
    }
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);