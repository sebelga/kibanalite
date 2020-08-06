const isInt = (value: unknown) => {
  return typeof value === "number";
};

const removeBrackets = (str: string) => {
  return str.slice(1, -1);
};

export const parser = (str: string, values?: Record<string, any>) => {
  if (!values) {
    return str;
  }

  const parsed = Object.entries(values).reduce((acc, [key, value]) => {
    let regex: RegExp;
    let parsedString = acc;

    if (isInt(value)) {
      // Check if we have some plural i18n to handle
      regex = new RegExp(
        `{count,\\splural,\\sone\\s({.+?})\\sother\\s({.+?})}`,
        "g"
      );
      const result = regex.exec(str);

      if (result) {
        const [match, singleValue, pluralValue] = result;
        const isPlural = value > 1;

        if (isPlural) {
          parsedString = parsedString.replace(
            match,
            `${value} ${removeBrackets(pluralValue)}`
          );
        } else {
          parsedString = parsedString.replace(
            match,
            `${value} ${removeBrackets(singleValue)}`
          );
        }
      }
    }
    regex = new RegExp(`{${key}}`, "g");
    return parsedString.replace(regex, value);
  }, str);

  return parsed;
};
