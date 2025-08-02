const text = document.getElementById("text");

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  //const checkbox = e.target;
  const { target } = e;
  const { checked } = e.target;
  console.log(target);
  console.log(`${checked}`);

  if (checked) {
    text.style.backgroundColor = "red"
  }else {
    text.style.backgroundColor = ""
  }
}
