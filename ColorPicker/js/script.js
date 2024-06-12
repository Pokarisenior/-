const text = document.querySelector('#colorText');
const color= document.querySelector('#colorPicker');
// カラーピッカーが変更されたら、背景色を変更し、カラーコードを表示
const colorBg = () => {
  document.body.style.backgroundColor = color.value;
  if (color.value === '#ffffff') {
    text.textContent = `カラーコード：${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード：${color.value} (black)`;
  } else {
    text.textContent = `カラーコード：${color.value}`;
  }
};

// イベントリスナーを適切に追加
color.addEventListener('input', colorBg);
