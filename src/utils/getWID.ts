import timeUtils from './timeUtils.js';

const getWID = (userID: string, date: Date) =>
  `${timeUtils.prefix(date.getDate())}-${date.getMonth() + 1}月 -22_${userID}`;

export default getWID;
