import { format } from 'date-fns';
import delay from 'delay';
import IRecord from '../types/IRecord';
import request from './controller/request';
import getTemp from './utils/getTemp';
import getWID from './utils/getWID';

(async () => {
  delay(1000);
  console.log(
    `官吏和常备军是资产阶级社会身上的“寄生物”，是使这个社会分裂的内部矛盾所产生的寄生物，而且正是“堵塞”生命的毛孔的寄生物。
    ——列宁《国家与革命》`,
  );
  const [todayHasReported, savedReports] = await Promise.all([
    request.getTodayHasReported(),
    request.getMyDailyReport(),
  ]);
  if (!!todayHasReported) {
    console.log('今日已打卡');
    return 0;
  }
  const lastReport: IRecord = savedReports.rows[0];
  console.log(savedReports);
  const WID = getWID(lastReport.USER_ID);
  console.log(WID === lastReport.WID);
  const time = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  const date = format(new Date(), 'yyyy-MM-dd');
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
  const res = await request.HealthDailyInfoSave(reportToSend);
  console.log(res);
  return 0;
})();
