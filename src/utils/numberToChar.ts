export const numberToChar = (num: number): string => {
  const division = Math.floor(num / 26);
  const reminder = Math.floor(num % 26);

  const char = String.fromCharCode(reminder + 97).toUpperCase();

  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};
