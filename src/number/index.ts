import BigNumber from 'bignumber.js';

/**
 * @desc 千分位格式化
 * @param { number | string } num  需要格式化的数字
 * @param { string } unit unit， xus usd...
 * @param { Object } options other options
 * @param { number } options.integerLength 整数最大位数
 * @param { number } options.decimalsLength 小数最大位数
 * @return { string }
 * **/

export function numberToThousands(
  num: number | string,
  unit?: string,
  options?: { integerLength: number; decimalsLength: number }
): string | null {
  const { integerLength, decimalsLength } = options || { integerLength: 24, decimalsLength: 8 };

  const BN = BigNumber.clone();

  BN.config({
    DECIMAL_PLACES: decimalsLength,
    EXPONENTIAL_AT: integerLength + decimalsLength + 1,
    RANGE: 500,
    FORMAT: {
      decimalSeparator: '.',
      fractionGroupSeparator: '',
      fractionGroupSize: 0,
      groupSeparator: ',',
      groupSize: 3,
      secondaryGroupSize: 0,
    },
  });

  if (Number.isNaN(Number(num))) {
    return null;
  }

  // format result

  let resultNum = '';

  // format value

  let formatVal = String(num);

  const isDotEnd = formatVal[formatVal.length - 1] === '.';

  // is decimal

  const isDecimal = formatVal.includes('.');

  if (isDecimal) {
    let [integerVal, decimalVal] = formatVal.split('.');

    integerVal = integerVal.length > integerLength ? integerVal.substring(0, integerLength) : integerVal;

    decimalVal = decimalVal.length > decimalsLength ? decimalVal.substring(0, decimalsLength) : decimalVal;

    formatVal = `${integerVal}.${decimalVal}`;
  } else {
    formatVal = formatVal.length > integerLength ? formatVal.substring(0, integerLength) : formatVal;
  }

  const bigNum = new BN(formatVal);

  const [formatIntegerVal, formatDecimalVal] = bigNum.toFormat().split('.');

  console.log('resultNum1', formatDecimalVal);
  console.log('isDecimal', isDecimal);
  if (isDecimal && !isDotEnd) {
    resultNum = `${formatIntegerVal}.${formatDecimalVal}`;
  } else {
    resultNum = `${formatIntegerVal}${isDotEnd ? '.' : ''}`;
  }

  return `${resultNum} ${unit || ''}`.trim();
}

/**
 * @func thousandsToString
 * @desc 千分位还原  999,999,999 => 999999999
 * @param { string } str str 需要还原的字符串
 * @param { string } groupSeparator  千分位的分隔符
 * **/

export function thousandsToString(str: string, groupSeparator?: string): string {
  return str.split(groupSeparator || ',').join('');
}
