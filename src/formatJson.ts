export const formatJSON = (jsonString: string): string => {
  try {
    // Attempt to parse the JSON
    const jsonObj = JSON.parse(jsonString);
    // If parsing succeeds, stringify with indentation
    return JSON.stringify(jsonObj, null, 4);
  } catch (error) {
    // If parsing fails, format the string manually
    let formattedJSON = '';
    let indentLevel = 0;

    for (const char of jsonString) {
      switch (char) {
        case '{':
        case '[':
          formattedJSON += char + '\n' + ' '.repeat((indentLevel + 1) * 2);
          indentLevel++;
          break;
        case '}':
        case ']':
          formattedJSON += '\n' + ' '.repeat((indentLevel - 1) * 2) + char;
          indentLevel--;
          break;
        case ',':
          formattedJSON += char + '\n' + ' '.repeat(indentLevel * 2);
          break;
        default:
          formattedJSON += char;
          break;
      }
    }
    return formattedJSON;
  }
}