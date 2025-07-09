function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked) {
    // <p id="text">背景色が変わります。</p> の背景色が変わる
    // document.getElementById("text")で、<p id="text">ここの背景色が変わります。</p>が取得されて、style.でtextの部分のスタイル（css）を指定。要するに、textの部分のbackgroundColorを指します。
    document.getElementById('text').style.backgroundColor = "red";
  } else {
    // 背景色を無色にするには、background-color: transparent で指定
    document.getElementById('text').style.backgroundColor = "transparent";
  }
}
