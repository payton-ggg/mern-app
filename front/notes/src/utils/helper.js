/* eslint-disable no-empty-character-class */
export const validateEmail = (email) => {
  const regex = /~!@#$%^&*(){}[]`'"|/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  words.forEach((element) => {
    initials += element[0];
  });

  return initials.toUpperCase();
};
