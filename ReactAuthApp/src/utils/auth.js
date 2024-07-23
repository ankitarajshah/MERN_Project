export const generateToken = () => {
  return Math.random().toString(36).substr(2); // Random token generation
};

export const isEmailUnique = (users, email) => {
  return !users.some((user) => user.email === email);
};

export const isUsernameUnique = (users, username) => {
  return !users.some((user) => user.username === username);
};
