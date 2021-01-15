import moment from 'moment';

export function formatDateInTable(dataArr) {
  return dataArr.map(data => {
    const startDate = moment(data.start_at).calendar(null, {
      sameDay: '[Today], HH:MM',
      nextDay: 'DD/MM/YYYY',
      nextWeek: 'DD/MM/YYYY',
      lastDay: 'DD/MM/YYYY',
      lastWeek: 'DD/MM/YYYY',
      sameElse: 'DD/MM/YYYY',
    });
    const endDate = moment(data.end_at).calendar(null, {
      sameDay: '[Today], HH:MM',
      nextDay: 'DD/MM/YYYY',
      nextWeek: 'DD/MM/YYYY',
      lastDay: 'DD/MM/YYYY',
      lastWeek: 'DD/MM/YYYY',
      sameElse: 'DD/MM/YYYY',
    });
    const createdDate = moment(data.created_at).calendar(null, {
      sameDay: '[Today], HH:MM',
      nextDay: 'DD/MM/YYYY',
      nextWeek: 'DD/MM/YYYY',
      lastDay: 'DD/MM/YYYY',
      lastWeek: 'DD/MM/YYYY',
      sameElse: 'DD/MM/YYYY',
    });

    return {
      ...data,
      start_at: startDate,
      end_at: endDate,
      created_at: createdDate,
    };
  });
}

export function sortDate(a, b) {
  return moment(a).diff(moment(b));
}

export const fillValuesToForm = (values, form) => {
  form.setFieldsValue({ ...values });
};
