export default {
  dateToString: (date: Date) => {
    if (!date) return 'Not Set'

    return `${date.getFullYear()/date.getMonth() + 1/date.getDate()}`;
  }
}

