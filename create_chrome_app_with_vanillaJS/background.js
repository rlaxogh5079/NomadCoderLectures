// 랜덤 배경화면 구현

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

document.querySelector(
  "body"
).style.backgroundImage = `linear-gradient(0.25turn,${
  colors[Math.floor(Math.random() * colors.length)]
},gray`;
