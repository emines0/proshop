import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    // This is the password that the user will use to login.
    // bcrypt is used to hash the password. Second argument is the salt.
    // 10 is the recommended value.
    // The higher the number, the more secure the password is but the longer it takes to hash.
    password: bcrypt.hashSync('123456', 10),
    // This is the user's admin status.
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
