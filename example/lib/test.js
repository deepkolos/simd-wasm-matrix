let pass;
let currTestName;
let expectIndex;
let errorIndex;
let taskChain = Promise.resolve();

function arrayEqual(m0, m1) {
  for (let i = 0; i < m0.length; i++) {
    if (Number.isNaN(m0[i]) || Number.isNaN(m1[i])) return false;
    if (Math.abs(m0[i] - m1[i]) > 0.0001) return false;
  }
  return true;
}

function isArray(arr) {
  return Array.isArray(arr) || arr.forEach || arr.byteLength !== undefined;
}

export const test = (name, cb) => {
  taskChain = taskChain.then(() => {
    const t = performance.now();
    pass = true;
    currTestName = name;
    expectIndex = 0;
    errorIndex = -1;
    const promise = Promise.resolve(cb()).then(() => {
      console.log(
        `test: ${name} ${pass ? '√' : `×[${errorIndex}]`} (${(performance.now() - t).toFixed(
          2,
        )}ms)`,
      );
    });
    return promise;
  });
};

export const expect = inputValue => {
  const myExpectIndex = expectIndex++;
  return {
    toBe(targetValue) {
      function unpass(index) {
        console.log(`${currTestName}[${myExpectIndex}]inputValue:`, inputValue);
        console.log(`${currTestName}[${myExpectIndex}]targetValue:`, targetValue);
        pass = false;
        if (errorIndex === -1) errorIndex = index;
      }

      if (isArray(targetValue)) {
        if (!arrayEqual(targetValue, inputValue)) unpass(myExpectIndex);
      } else if (targetValue !== inputValue) unpass(myExpectIndex);
    },
    notToBe(targetValue) {
      function unpass(index) {
        console.log(`${currTestName}[${myExpectIndex}]inputValue:`, inputValue);
        console.log(`${currTestName}[${myExpectIndex}]targetValue:`, targetValue);
        pass = false;
        if (errorIndex === -1) errorIndex = index;
      }

      if (isArray(targetValue)) {
        if (arrayEqual(targetValue, inputValue)) unpass(myExpectIndex);
      } else if (targetValue === inputValue) unpass(myExpectIndex);
    },
  };
};

/**
 * @param {{[name: string]: () => void | Promise<void>}} obj
 */
export const benchmark = (obj, loopCount = 100000, postfix = '', log = true) => {
  /**
   * @type {{[name: string]: number}}
   */
  const result = {};
  const resultFormatted = {};

  Object.keys(obj).forEach(key => {
    const t = performance.now();
    const fn = obj[key];
    for (let i = loopCount | 0; i > 0; i--) fn(i);
    result[key] = performance.now() - t;
  });

  const min = Math.min(...Object.values(result));

  Object.keys(obj).forEach(key => {
    const ms = result[key].toFixed(2);
    const ratio = (result[key] / min).toFixed(3);
    resultFormatted[key] = `${ms}ms (x${ratio})`;
  });

  if (log) {
    console.log(`\n${currTestName}_benchmark_${loopCount}${postfix}:`);
    console.table(resultFormatted);
  }
  return result;
};
