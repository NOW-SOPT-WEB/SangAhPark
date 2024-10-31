export const validatePassword = (password: string): boolean => {
  const regExp: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  return regExp.test(password);
};
