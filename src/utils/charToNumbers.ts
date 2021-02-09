export const charToNumber = (letters: string) =>
  letters
    // Get each letter on its own
    .split("")
    // Smaller first and then bigger
    .reverse()
    // Convert them to base 26 numbers
    .map((letter, index) =>
      index === 0
        ? letter.toLowerCase().charCodeAt(0) - 97
        : // The addition of 1 here is to oppose what we did for numberToLetter
          letter.toLowerCase().charCodeAt(0) - 97 + 1
    )
    // Convert base 26 to base 10
    .map((base26Number, position) => base26Number * 26 ** position)
    // Sum
    .reduce((sum: number, number: number) => sum + number, 0);
