import { IGraphDate } from './../store/initialState.d';
import { DateType } from './../types/DateType.d';
import {
  setDateType,
  setToDateYear,
  setToDateMonth,
  setToDateDay,
  setFromDateYear,
  setFromDateMonth,
  setFromDateDay
} from "./../store/currencyGraph/actions";

export interface IDateFormProps {
  dateType: DateType;
  fromDate: IGraphDate;
  toDate: IGraphDate;
  getCurrenciesThunk: Function;
  setDateType: typeof setDateType;
  setFromDateYear: typeof setFromDateYear;
  setFromDateMonth: typeof setFromDateMonth;
  setFromDateDay: typeof setFromDateDay;

  setToDateYear: typeof setToDateYear;
  setToDateMonth: typeof setToDateMonth;
  setToDateDay: typeof setToDateDay;
}
export type DateFormActions =
  | typeof setFromDateDay
  | typeof setFromDateMonth
  | typeof setFromDateYear
  | typeof setToDateDay
  | typeof setToDateMonth
  | typeof setToDateYear;
