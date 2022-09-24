export const isDateValid = (date: string) => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !Number.isNaN(dateObj.getTime());
};
