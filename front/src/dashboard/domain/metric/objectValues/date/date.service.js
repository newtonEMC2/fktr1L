const MILISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
const MILISECONDS_IN_A_HOUR = 60 * 60 * 1000;
const MILISECONDS_IN_A_MINUTE = 60 * 1000;

const DateRepositoryFactory = () => {
  const _previousDateISOString = (milisecondsToSubstract) =>
    new Date(Date.now() - milisecondsToSubstract).toISOString();

  const getFormatedDataFromTimestamp = (timestamp) =>
    new Date(timestamp).toString();

  const ISOStringDateTimestamp = () => new Date().toISOString();

  const getDateOneDayBeforeISOString = () =>
    _previousDateISOString(MILISECONDS_IN_A_DAY);

  const getDateOneHourBeforeISOString = () =>
    _previousDateISOString(MILISECONDS_IN_A_HOUR);

  const getDateOneMinuteBeforeISOString = () =>
    _previousDateISOString(MILISECONDS_IN_A_MINUTE);

  return {
    getFormatedDataFromTimestamp,
    ISOStringDateTimestamp,
    getDateOneDayBeforeISOString,
    getDateOneHourBeforeISOString,
    getDateOneMinuteBeforeISOString,
  };
};

export const dateRepository = DateRepositoryFactory();
