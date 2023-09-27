function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  // 背景色を変更。
  const text = document.getElementById("text");
  const button = document.getElementById("check");

  if(button.checked){
    //チェックボックスをオンオフすると色が切り替わる。
  text.style.backgroundColor ="red"; //チェックを入れると背景色を赤色にする
}else{
  text.style.backgroundColor ="white"; //チェックを外すと背景色を無色(白色)にする
 }
}

// function changeBackgroundColor(e) {
//   // ここに背景色を変える処理を書く。
//   const text = document.getElementById("text");
//   const button = document.getElementById("check");
//   if (button.checked) {
//     text.style.backgroundColor = "red";
//   } else {
//     text.style.backgroundColor = "white";
//   }
// }


