// <button> 要素を取得し、その参照を変数 btn に格納する
const btn = document.querySelector("button");

// アラートを表示する
function clickOnAlert () {
  window.alert("ECMAScript")
}

// ボタンをクリックした時に、clickOnAlert を実行する

btn.addEventListener("click", clickOnAlert);