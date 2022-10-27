type WEEKDAYS = {
  [key in 0 | 1 | 2 | 3 | 4 | 5 | 6]: string;
} & {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
type MONTHS = {
  [key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11]: string;
} & {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
};

const HEBREW_TIMES = {
  DAY: 'יום',
  WEEKDAYS: {
    0: 'ראשון',
    1: 'שני',
    2: 'שלישי',
    3: 'רביעי',
    4: 'חמישי',
    5: 'שישי',
    6: 'שבת'
  },
  MONTHS: {
    0: 'ינואר',
    1: 'פברואר',
    2: 'מרץ',
    3: 'אפריל',
    4: 'מאי',
    5: 'יוני',
    6: 'יולי',
    7: 'אוגוסט',
    8: 'ספטמבר',
    9: 'אוקטובר',
    10: 'נובמבר',
    11: 'בצמבר'
  },
  HA: 'ה-',
  LE: 'ל',
  BE: 'ב'
}
export function parseDatetime(datetime: string | number | Date) {
  const d = new Date(datetime);
  const { 
    MONTHS, 
    DAY, 
    WEEKDAYS, 
    HA, 
    LE } = HEBREW_TIMES;
  const month = d.getMonth() as keyof MONTHS
  const day = d.getDay() as keyof WEEKDAYS
  return [DAY, WEEKDAYS[day], HA, d.getDate(), `${LE}${MONTHS[month]}`, `${d.getHours()}:${d.getMinutes()}`].join(' ')
}
