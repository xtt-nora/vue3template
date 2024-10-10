export const isPhone = function () {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone", "Symbian0s", "windows Phone", "iPad", "iPod"];
  // console.log(userAgentInfo);
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) >= 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
