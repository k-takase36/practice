'use strict';

// ◆課題4
// ◆プルダウンを「あ」「か」選択すると、選択したプルダウンのテキスト「あいう」「かきく」が表示する
 
// 方法_1（表示、非表示の切替：display）
// ①テキスト要素を取得
// ②テキスト要素のスタイル属性を指定して、初期状態を非表示にする
// ③イベント（onchange）関数内で、プルダウン要素の取得
// ④if文でプルダウン要素が選択された時、テキスト要素を表示、非表示に切替

// let aElm = document.getElementById('a');
// aElm.style.display = 'none';

// let kaElm = document.getElementById('ka');
// kaElm.style.display = 'none';

// function changeRadio() {
//   let aRadioElm = document.getElementById('aRadio');
//   let kaRadioElm = document.getElementById('kaRadio');
  
//   if (aRadioElm.checked){
//     aElm.style.display = 'block';
//     kaElm.style.display = 'none';
//   } else if(kaRadioElm.checked) {
//     kaElm.style.display = 'block';
//     aElm.style.display = 'none';
//   }

// };


// ◆方法_2
// ◆手順
// 方法_2（表示、非表示の切替：textContent）
// ①テキスト要素の取得
// ②テキスト要素のtextを指定して、textの初期状態を空にする
// ③イベント（onchange）関数内で、プルダウン要素の取得
// ④if文でプルダウン要素が選択された時、テキスト要素のtextContentを表示、非表示に切替

// let aElm = document.getElementById('a');
// aElm.textContent = '';

// let kaElm = document.getElementById('ka');
// kaElm.textContent = '';

// function changeRadio() {

//   let aRadioElm = document.getElementById('aRadio');
//   let kaRadioElm = document.getElementById('kaRadio');

//   if (aRadioElm.checked){
//       aElm.textContent = 'あいう';
//       kaElm.textContent = '';
//   } else if(kaRadioElm.checked) {
//         kaElm.textContent = 'かきく';
//         aElm.textContent = '';
//   }
    
// };

// ◆方法_3
// ◆手順
// 方法_3（value値の書き換え）
// ①html側のthis.valueを関数の引数として渡す
// ②イベント（onchange）関数内で、テキスト要素の取得
// ③テキスト要素のテキストに、引数val（取得したvalue値）を代入して表示

function changeRadio(val) {
  let txtElm = document.getElementById('txt');
  txtElm.textContent = val;
};