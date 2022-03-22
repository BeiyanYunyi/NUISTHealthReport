const getDays = (now: Date) => {
  const month = now.getMonth();
  const year = now.getFullYear();
  /** 4,6,9,11 */
  const ary30 = [3, 5, 8, 10];
  if (ary30.includes(month)) {
    return 30;
  }
  // February
  if (month === 1 && year % 4 === 0) {
    // Leap year
    if (year % 400 === 0) return 29;
    if (year % 100 === 0) return 28;
    return 29;
  }
  if (month === 1) {
    return 28;
  }
  return 31;
};

export default getDays;
