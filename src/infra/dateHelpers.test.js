import dateHelper from "./dateHelpers";

const { formatDateForQueryString, getWeekArray } = dateHelper;

// dateHelper.test.js
describe("formatDateForQueryString 함수는", () => {
  describe("YY. M. DD. 형식의 문자열을 받아, ", () => {
    test("YYMMDD 형식의 문자열로 변환한다.", () => {
      // const actual = formatDateForQueryString("18. 1. 10.");
      // expect(actual).toBe("180110");
    });
  });
});
