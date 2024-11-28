import {format} from 'date-fns';

export const DateTimeLong = (value: string): string => {
  const date = new Date(value);

  return format(date, 'MMMM dd yyyy hh:mm a');
};

export const DateLong = (value: string): string => {
  const date = new Date(value);

  return format(date, 'MMMM dd yyyy');
};

export const DateShort = (value: string): string => {
  const date = new Date(value);

  return format(date, 'MM/dd/yyyy');
};
