function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let color = document.getElementById("text");
  let flag = document.getElementById("check");

  if (flag.checked) {
    color.style.backgroundColor = "red";
  } else {
    color.style.backgroundColor = "white";
  }
}