import { Datum } from "../interfaces";

/**
 * Stringify numbers
 * @param {Number to stringify} number
 */
export const commanumbers = (number: number): string => {
  let numberString = "";
  if (number !== undefined) {
    numberString = number.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  }
  return numberString;
};

/**
 * Download a file from a specific path
 * @param {Path to download from} filePath
 */
export const downloadFile = (
  filePath: string,
  filename: string,
  fileExtension: string
): void => {
  const link = document.createElement("a");
  link.href = filePath;
  link.setAttribute("download", `${filename}.${fileExtension}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * @param  {number} amount
 * @returns string
 */
export const formatMoney = (
  amount: number,
  currency: string,
  fractions?: number
): string => {
  const options = {
    style: "currency",
    currency,
    minimumFractionDigits: fractions || fractions === 0 ? fractions : 2,
  };
  // if its a whole, dollar amount, leave off the .00
  // if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount);
};

/**
 * Group items from an array together by some criteria or value.
 * @param  {Array}           arr      The array to group items from
 * @param  {String|Function} criteria The criteria to group by
 * @return {Object}                   The grouped object
 */
export const groupBy = (arr: Array<any>, criteria: string | Function) => {
  return arr.reduce((obj, item) => {
    const newObj = { ...obj };
    // Check if the criteria is a function to run on the item or a property of it
    const key =
      typeof criteria === "function" ? criteria(item) : item[criteria];
    if (key) {
      // If the key doesn't exist yet, create it
      const objHasKey = Object.prototype.hasOwnProperty.call(newObj, key);
      if (!objHasKey) {
        newObj[key] = [];
      }
      // Push the value to the object
      newObj[key].push(item);
    }
    // Return the object to the next item in the loop
    return newObj;
  }, {});
};

export const ordinalSuffixOf = (i: number) => {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
};

export const titleCase = (str: string = "", lowerCase?: boolean) => {
  let newStr = str || "";
  if (lowerCase) {
    newStr = newStr.toLowerCase();
  }
  const splitStr = newStr.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const countDecimals = (value: number) => {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length;
};

export const getDate = (dob: string) => {
  const splitted = dob.split("T")[0].split("-");
  const year = Number(splitted[0]);
  const month = Number(splitted[1]) - 1;
  const day = Number(splitted[2]);
  return new Date(year, month, day);
};

export const getDateNoTimezone = (date: string) => {
  const dt = new Date(date);
  const dtDateOnly = new Date(
    dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
  );
  return dtDateOnly;
};

export const getDateInTimezone = (date: string) => {
  const dt = new Date(date);
  const userTimezoneOffset = dt.getTimezoneOffset() * 60000;
  return new Date(dt.getTime() + userTimezoneOffset);
};

export const getUrlParams = (params: Datum) => ({
  userId: Number(params.userId),
  offerId: Number(params.offerId),
  status: params.status,
  actiontype: params.actiontype,
});

export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      /* istanbul ignore next */
      throw new Error("Could not copy to clipboard");
    }
  } else {
    const dummy = document.createElement("textarea");
    dummy.textContent = text;
    document.body.appendChild(dummy);

    const selection = document.getSelection();
    const range = document.createRange();
    range.selectNode(dummy);
    selection && selection.removeAllRanges();
    selection && selection.addRange(range);
    document.execCommand("copy");
    selection && selection.removeAllRanges();
    document.body.removeChild(dummy);
  }
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: any;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

const editDistance = (s1: string, s2: string) => {
  // eslint-disable-next-line no-param-reassign
  s1 = s1.toLowerCase();
  // eslint-disable-next-line no-param-reassign
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};

export const similarity = (s1: string, s2: string) => {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) /
    parseFloat(longerLength.toString())
  );
};
