module.exports = {
  getDecadeFromYear: (year) => Math.floor(year / 10) * 10,
  isRecent: (date) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(date) > weekAgo;
  },
};
