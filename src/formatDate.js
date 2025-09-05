/* eslint-disable no-console */
'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const dateSplitted = date.split(fromFormat[3]);
  let oldDayPosition = 0;
  let newDayPosition = 0;
  let oldMonthPosition = 0;
  let newMonthPosition = 0;
  let oldYearPosition = 0;
  let newYearPosition = 0;

  // Loop that gets the position of the day, the month and the year
  for (let p = 0; p < toFormat.length; p++) {
    // Get the date positions for the old format
    if (fromFormat[p] === 'DD') {
      oldDayPosition = p;
    } else if (fromFormat[p] === 'MM') {
      oldMonthPosition = p;
    } else if (fromFormat[p] === 'YY' || fromFormat[p] === 'YYYY') {
      oldYearPosition = p;
    }

    // Get the date positions for the new format
    if (toFormat[p] === 'DD') {
      newDayPosition = p;
    } else if (toFormat[p] === 'MM') {
      newMonthPosition = p;
    } else if (toFormat[p] === 'YY' || toFormat[p] === 'YYYY') {
      newYearPosition = p;
    }
  }

  // Putting the year in the rigth format if the position is 0
  if (oldYearPosition === 0 && fromFormat[0] === 'YY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[0];
    } else if (toFormat[newYearPosition] === 'YYYY') {
      if (dateSplitted[0] >= 30) {
        toFormat[newYearPosition] = '19' + dateSplitted[0];
      } else {
        toFormat[newYearPosition] = '20' + dateSplitted[0];
      }

      // Taking the day in the rigth format and position from the date
      toFormat[newDayPosition] = dateSplitted[oldDayPosition];

      // Taking the month in the rigth format and position from the date
      toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];
    }
  } else if (oldYearPosition === 0 && fromFormat[0] === 'YYYY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[0].slice(2, 5);
    } else if (toFormat[newYearPosition] === 'YYYY') {
      toFormat[newYearPosition] = dateSplitted[0];
    }

    // Taking the day in the rigth format and position from the date
    toFormat[newDayPosition] = dateSplitted[oldDayPosition];

    // Taking the month in the rigth format and position from the date
    toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];

    console.log(toFormat);
  }

  // -----------------------------------------------------------------------

  // Putting the year in the rigth format if the position is 1
  if (oldYearPosition === 1 && fromFormat[1] === 'YY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[oldYearPosition];
    } else if (toFormat[newYearPosition] === 'YYYY') {
      if (dateSplitted[oldYearPosition] > 30) {
        toFormat[newYearPosition] = '19' + dateSplitted[oldYearPosition];
      } else {
        toFormat[newYearPosition] = '20' + dateSplitted[oldYearPosition];
      }

      // Taking the day in the rigth format and position from the date
      toFormat[newDayPosition] = dateSplitted[oldDayPosition];

      // Taking the month in the rigth format and position from the date
      toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];
    }
  } else if (oldYearPosition === 1 && fromFormat[1] === 'YYYY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[oldYearPosition].slice(2, 5);
    } else if (toFormat[newYearPosition] === 'YYYY') {
      toFormat[newYearPosition] = dateSplitted[oldYearPosition];
    }

    // Taking the day in the rigth format and position from the date
    toFormat[newDayPosition] = dateSplitted[oldDayPosition];

    // Taking the month in the rigth format and position from the date
    toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];
    console.log(dateSplitted);
  }

  // -----------------------------------------------------------------------

  // Putting the year in the rigth format if the position is 2
  if (oldYearPosition === 2 && fromFormat[2] === 'YY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[2];
    } else if (toFormat[newYearPosition] === 'YYYY') {
      if (dateSplitted[oldYearPosition] > 30) {
        toFormat[newYearPosition] = '19' + dateSplitted[2];
      } else {
        toFormat[newYearPosition] = '20' + dateSplitted[2];
      }

      // Taking the day in the rigth format and position from the date
      toFormat[newDayPosition] = dateSplitted[oldDayPosition];

      // Taking the month in the rigth format and position from the date
      toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];
    }
  } else if (oldYearPosition === 2 && fromFormat[2] === 'YYYY') {
    if (toFormat[newYearPosition] === 'YY') {
      toFormat[newYearPosition] = dateSplitted[oldYearPosition].slice(2, 5);
    } else if (toFormat[newYearPosition] === 'YYYY') {
      toFormat[newYearPosition] = dateSplitted[oldYearPosition];
    }

    // Taking the day in the rigth format and position from the date
    toFormat[newDayPosition] = dateSplitted[oldDayPosition];

    // Taking the month in the rigth format and position from the date
    toFormat[newMonthPosition] = dateSplitted[oldMonthPosition];
  }

  let dateResult = '';

  if (toFormat[newYearPosition].length === 2) {
    dateResult = toFormat.join(toFormat[3]).slice(0, 8);
  } else if (toFormat[newYearPosition].length === 4) {
    dateResult = toFormat.join(toFormat[3]).slice(0, 10);
  }

  return dateResult;
}

module.exports = formatDate;
