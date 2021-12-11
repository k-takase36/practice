'use strict';

// 学習3_ 親プルダウンの子要素を選択後、選択した子要素のプルダウンが表示
// 条件：子要素のプルダウンは初期状態は非表示、親プルダウンで選択された時に表示される仕様

// 手順
// ①親プルダウンの親要素を取得
// ②親プルダウンのvalue属性を代入
// ③if文を使用して、親プルダウンの指定したvalue属性を選択したき、表示、非表示

let meatElm = document.getElementById('meat');
meatElm.style.display = 'none';

let fishElm = document.getElementById('fish');
fishElm.style.display = 'none';

let vegeElm = document.getElementById('vegetable');
vegeElm.style.display = 'none';

function materialChange() {
  let mateElm = document.getElementById('material');
  let mateVal = mateElm.value; 
  
  if (mateVal == '2') {
    meatElm.style.display = 'block';
    fishElm.style.display = 'none';
    vegeElm.style.display = 'none';
  } else if (mateVal == '3') {
    meatElm.style.display = 'none';
    fishElm.style.display = 'block';
    vegeElm.style.display = 'none';
  } else if (mateVal == '4') {
    meatElm.style.display = 'none';
    fishElm.style.display = 'none';
    vegeElm.style.display = 'block';
  } else {
    meatElm.style.display = 'none';
    fishElm.style.display = 'none';
    vegeElm.style.display = 'none';
  }

};