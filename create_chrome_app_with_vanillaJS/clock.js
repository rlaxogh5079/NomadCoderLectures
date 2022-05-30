//실시간 시계 구현

const clock = document.querySelector("#clock");

const handleInterval = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  clock.innerText = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
};
handleInterval();
setInterval(handleInterval, 1000);
