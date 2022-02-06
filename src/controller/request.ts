import axios from 'axios';
import IRecord from '../../types/IRecord';

const request = {
  async getMyDailyReport() {
    const form = new URLSearchParams();
    form.append('pageNumber', '1');
    form.append('pageSize', '20');
    form.append('*order', '-CREATED_AT');
    form.append('', '');
    const res = await axios.post(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/getMyDailyReportDatas.do',
      form,
    );
    return res.data.datas.getMyDailyReportDatas;
  },

  async healthClock() {
    const formtoSend = new URLSearchParams();
    formtoSend.append('*json', '1');
    const { data } = await axios.post(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock.do',
      formtoSend,
    );
    return data;
  },

  async getTodayHasReported() {
    const form = new URLSearchParams();
    form.append('pageNumber', '1');
    form.append('', '');
    const { data } = await axios.post(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/getTodayHasReported.do',
      form,
    );
    return data.datas.getTodayHasReported.totalSize;
  },

  async HealthDailyInfoSave(record: IRecord) {
    const form = new URLSearchParams();
    const keys = Object.keys(record) as unknown as (keyof IRecord)[];
    keys.forEach((key) => {
      if (key === 'TODAY_VACCINE_CONDITION_DISPLAY') return form.append(key, '请选择');
      const value = record[key];
      if (value === null) return form.append(key, '');
      return form.append(key, value);
    });
    form.append('', '');
    const { data } = await axios.post(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/T_HEALTH_DAILY_INFO_SAVE.do',
      form,
    );
    return data;
  },
};

export default request;
