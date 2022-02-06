import selectUntilExist from '../utils/selectUntilExist';

const selectBtn1: () => Promise<HTMLButtonElement> = async () => {
  const btn1 = await selectUntilExist('button.flow-apply.mt-btn-primary');
  return btn1 as HTMLButtonElement;
};

export default selectBtn1;
