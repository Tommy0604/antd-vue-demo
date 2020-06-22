function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [80, 40, 50, 10, 30, 48].map(() => Math.random(100));
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
