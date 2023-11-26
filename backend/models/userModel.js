import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    // This is the email that the user will use to login.
    email: { type: String, required: true, unique: true },
    // This is the password that the user will use to login.
    password: { type: String, required: true },
    // This is the user's admin status.
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    // This automatically creates fields for when the document was created and when it was last updated.
    timestamps: true,
  }
);

// This is a sub-document of userSchema.
const User = mongoose.model('User', userSchema);

export default User;
