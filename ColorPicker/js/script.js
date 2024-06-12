const text = document.querySelector('#colorText');
const color= document.querySelector('#colorPicker');
//カラーピッカーが変更されたら、カラーコードを表示
const colorBg=()=>{
  text.textContent = `カラーコード：${color.value}`;
};
color.addEventListener('input',colorBg);


