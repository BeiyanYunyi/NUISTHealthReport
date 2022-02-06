import format from 'date-fns/format';

const getWID = (userID: string) => {
  const date = new Date();
  return format(date, `dd-M月 -yy_${userID}`);
};

export default getWID;
