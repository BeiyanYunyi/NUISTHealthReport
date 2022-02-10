import timeUtils from './timeUtils';

const getWID = (userID: string, date: Date) =>
  `${timeUtils.prefix(date.getDate())}-${date.getMonth() + 1}月 -22_${userID}`;

export default getWID;
