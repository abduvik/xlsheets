export const numberToChar = (num: number): string => {
  const division = Math.floor(num / 26);
  const reminder = Math.floor(num % 26);

  const char = String.fromCharCode(reminder + 97).toUpperCase();
  // The idea of subtracting 1 is because the next numbers doesn't have zero in their system
  // But our xlsheet title alphabet mapping have zero (A=0)
  // So we need to subtract 1 to adjust this
  // In case of using base 10, number after 9 wouldn't be 10 but rather 00 :D
  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};
