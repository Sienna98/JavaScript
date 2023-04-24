// 문제 1
// 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
let userNumber = 0;
if (userNumber === 0) {
  console.log("0입니다.");
} else if (userNumber > 0) {
  console.log("양수 입니다.");
} else {
  console.log("음수 입니다.");
}

// 문제 2
// 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오
let userScore = 99;
if (userScore >= 90) {
  console.log("A");
} else if (userScore <= 89 && userScore >= 80) {
  console.log("B");
} else if (userScore <= 79 && userScore >= 70) {
  console.log("C");
} else if (userScore <= 69 && userScore >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 문제 3
// 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
let skills = ["HTML", "CSS", "React", "Javascript"];
// Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오
if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락");
}
