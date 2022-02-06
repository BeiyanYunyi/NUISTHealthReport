import delay from 'delay';

const selectUntilExist: (
  ...queryStr: Parameters<Document['querySelector']>
) => Promise<NonNullable<ReturnType<Document['querySelector']>>> = async (queryStr) => {
  const selectTarget = document.querySelector(queryStr);
  if (selectTarget) return selectTarget;
  await delay(1000);
  return selectUntilExist(queryStr);
};

export default selectUntilExist;
