import IRecord from '../../types/IRecord.js';

const request = {
  async getMyDailyReport() {
    const form = new URLSearchParams();
    form.append('pageNumber', '1');
    form.append('pageSize', '20');
    form.append('*order', '-CREATED_AT');
    form.append('', '');
    const req = new Request(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/getMyDailyReportDatas.do',
      { body: form, method: 'POST' },
    );
    const res = await (await fetch(req)).json();
    return res.datas.getMyDailyReportDatas;
  },

  async healthClock() {
    const formtoSend = new URLSearchParams();
    formtoSend.append('*json', '1');
    const req = new Request(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock.do',
      { body: formtoSend, method: 'POST' },
    );
    const res = await (await fetch(req)).json();
    return res;
  },

  async getTodayHasReported() {
    const form = new URLSearchParams();
    form.append('pageNumber', '1');
    form.append('', '');
    const req = new Request(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/getTodayHasReported.do',
      { body: form, method: 'POST' },
    );
    const res = await (await fetch(req)).json();
    return res.datas.getTodayHasReported.totalSize;
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
    const req = new Request(
      'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/T_HEALTH_DAILY_INFO_SAVE.do',
      { body: form, method: 'POST' },
    );
    const res = await (await fetch(req)).json();
    return res;
  },
};

export default request;
