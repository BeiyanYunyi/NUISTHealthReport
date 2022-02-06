const prefix = (number: number) => {
  if (number < 10) return `0${number}`;
  return `${number}`;
};

const getyyyyMMddHHmmss = (date: Date) => {
  const MM = prefix(date.getMonth());
  const dd = prefix(date.getDate());
  const HH = prefix(date.getHours());
  const mm = prefix(date.getMinutes());
  const ss = prefix(date.getSeconds());
  return `${date.getFullYear()}-${MM}-${dd} ${HH}:${mm}:${ss}`;
};

const getyyyyMMdd = (date: Date) => {
  const MM = prefix(date.getMonth());
  const dd = prefix(date.getDate());
  return `${date.getFullYear()}-${MM}-${dd}`;
};

export default { prefix, getyyyyMMddHHmmss, getyyyyMMdd };
