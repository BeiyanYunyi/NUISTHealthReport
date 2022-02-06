import delay from 'delay';
import selectUntilExist from '../utils/selectUntilExist';

const selectBtn2: () => Promise<HTMLButtonElement> = async () => {
  if (
    document.querySelector(
      'div.mint-layout-lr-item button.mint-button.mt-btn-primary.mint-button--normal.is-disabled',
    )
  ) {
    await delay(1000);
    return selectBtn2();
  }
  const btn2 = await selectUntilExist(
    'div.mint-layout-lr-item button.mint-button.mt-btn-primary.mint-button--normal',
  );
  return btn2 as HTMLButtonElement;
};

export default selectBtn2;
