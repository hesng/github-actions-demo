// YY. M. DD. -> YYMMDD
export function formatDateForQueryString(dateString) {
  const splitArray = dateString.split(".");
  splitArray.map((el, i, arr) => {
    arr[i] = el.replace(/ /gi, "").length === 1 ? "0" + el : el;
  });
  return splitArray.join("").replace(/ /gi, "");
}

// return `${dateString} `
//   .split('. ')
//   .map(x => (x.length === 1 ? `0${x}` : x))
//   .join('');

export default {
  formatDateForQueryString
};
