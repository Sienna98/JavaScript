//랜덤 번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 down
// 랜덤번호가 > 유저번호 up
// reset 버튼 누르면 게임 리셋
// 5번의 기회를 다쓰면 게임끝(더이상 추측 불가)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회차감 x
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회차감 x

let computerNum = 0;
const playButton = document.getElementById("playButton");
const userInput = document.getElementById("userInput");
const resultArea = document.getElementById("resultArea");
const resetButton = document.getElementById("resetButton");
const chanceArea = document.getElementById("chanceArea");

let chances = 5;
let gameover = false;

const pickRandomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
};

const play = () => {
  let userValue = userInput.value;
  chances--;
  chanceArea.textContent = `남은 기회:${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
  } else {
    resultArea.textContent = "정답!";
  }

  if (chances < 1) {
    gameover = true;
  }
  if (gameover == true) {
    playButton.disabled = true;
  }
};

const reset = () => {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다!";
};

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
pickRandomNum();
