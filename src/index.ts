/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import IRecord from '../types/IRecord';
import request from './controller/request';
import getDays from './utils/getDays';
import getTemp from './utils/getTemp';
import getWID from './utils/getWID';
import timeUtils from './utils/timeUtils';

(async () => {
  console.log(
    `官吏和常备军是资产阶级社会身上的“寄生物”，是使这个社会分裂的内部矛盾所产生的寄生物，而且正是“堵塞”生命的毛孔的寄生物。
    ——列宁《国家与革命》`,
  );
  const savedReports = await request.getMyDailyReport();
  const lastReport: IRecord = savedReports.rows[0];
  const now = new Date();
  for (let i = 1; i <= getDays(now); i += 1) {
    now.setDate(i);
    console.log(savedReports);
    const WID = getWID(lastReport.USER_ID, now);
    console.log(WID === lastReport.WID);
    const time = timeUtils.getyyyyMMddHHmmss(now);
    const date = timeUtils.getyyyyMMdd(now);
    const reportToSend: IRecord = {
      ...lastReport,
      CREATED_AT: time,
      CZRQ: time,
      FILL_TIME: time,
      NEED_CHECKIN_DATE: date,
      WID,
      TODAY_TEMPERATURE: getTemp().toString(),
    };
    console.log(reportToSend);
    // 第一次（创建）时会强制设置日期，所以再来一次覆盖就好
    await request.HealthDailyInfoSave(reportToSend);
    const res = await request.HealthDailyInfoSave(reportToSend);
    console.log(res);
  }
  console.log('签到完毕');
  return 0;
})();
