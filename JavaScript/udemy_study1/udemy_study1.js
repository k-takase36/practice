'use strict';

// Udemy学習
// // 要素を取得（getElementByIdメソッド）
// let btn = document.getElementById('button');
// btn.addEventListener('click', () => {
//   // console.log('取得できました！');

//   // ※IDによるノードの取得（getElementByIdメソッド）
//   let headerTitle = document.getElementById('headerTitle'); //get(取得する)Element（要素を）ById（Idによって）
//   console.log(headerTitle);
  
//   // テキストの取得
//   console.log(headerTitle.textContent);
  
//   //テキストの置換
//   headerTitle.textContent = '見出し変更！' ;
//   headerTitle.style.color = 'red';

// });

// 指定した属性値の取得（getAttributeメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) { 
//   //IDによるノードの取得
//   let inputColorName = document.getElementById('inputColorName'); 
//   // 取得したインプット要素の入力値の取得
//   let colorNameText = inputColorName.value;
//   // 取得したインプット要素のname属性値を取得（getAttributeメソッド）
//   let inputName = inputColorName.getAttribute('name'); //getAttributeメソッドを使い、引数には取得したい属性名を記述
//   // idがindex.htmlのshowTextのp要素を取得
//   let showText = document.getElementById('showText');
//   // 出力
//   showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
// }, false);


// 属性の追加、更新、削除

// // 属性の追加、更新（赤）（setAttributeメソッド）
// let buttonRed = document.getElementById('buttonRed');
// buttonRed.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.setAttribute('class', 'red');
// });

// // 属性の追加、更新（青）（setAttributeメソッド）
// let buttonBlue = document.getElementById('buttonBlue');
// buttonBlue.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.setAttribute('class', 'blue');
// });

// // 属性の削除（removeAttributeメソッド）
// let buttonRemove = document.getElementById('buttonRemove');
// buttonRemove.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.removeAttribute('class');
// });


// タグ名で要素の取得（getElementsByTagNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByTagName('p');
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) {
//     console.log(elements[i].textContent);
//   }
// });


// name属性で要素の取得（getElementsByNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByName('inputText');
//   console.log(elements); // 戻り値は配列形式で値が取得
//   console.log(elements[0].value); //戻り値は配列形式で値が取得のため、インプット要素に入れた値を取るには、例えば、インデックスを指定してvalueプロパティを使って取り出す
// });


// クラス名で要素の取得（getElementsByClassNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByClassName('foo');
//   console.log(elements);
//   //配列形式の要素だけを取得するにはfor文を使用
//   for(let i = 0; i < elements.length; i++) { 
//   console.log(elements[i].textContent);
//   }
// });


// // セレクタで最初の要素を取得（querySelectorメソッド）
// // セレクタとは：CSSでスタイルを適用するための条件式
// // 例）あるクラスの最初に一致する要素を取得
// let btn = document.getElementById('triggerButton'); 
// btn.addEventListener('click', () => {
//   // let element = document.querySelector('.foo');//セレクタで最初の要素を取得（querySelectorメソッド）
//   // console.log(element); //戻り値は配列形式で値が取得
//   // console.log(element.textContent); //テキストのみ取得

//   let elements = document.querySelectorAll('.foo'); // セレクタで複数の要素を取得（querySelectorAllメソッド）
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) { //配列形式の要素（テキスト）だけを取得するにはfor文を使用
//   console.log(elements[i].textContent);
//   }
// });


// 要素の生成（createElementメソッド）、追加（appendChildメソッド）、削除（removeChildメソッド）
// 要素の追加
// let addButton = document.getElementById('addButton');
// addButton.addEventListener('click', () => {
//   //入力欄のinput要素を取得
//   let inputLanguage = document.getElementById('inputLanguage');
//   // input要素から文字列を取得
//   let language = inputLanguage.value;
//   // 入力値が空ならば、returnで以降の処理を実施しない条件処理
//   if (language === '') {
//     alert('未入力です');
//     return;
//   }
//   // li要素を生成（createElementメソッドを使用）
//   let listItem = document.createElement('li');
//   // li要素のコンテンツの入力された文字列を設定
//   listItem.textContent = language;
//   // ul要素を取得
//   let languageList = document.getElementById('languageList');
//   // リストの末尾に生成したli要素を追加（appendChildメソッド使用）
//   languageList.appendChild(listItem);
//   // 入力欄をクリア
//   inputLanguage.value = '';
// });

// // 要素の削除（removeChildメソッド使用））
// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener('click', () => {
//   // ul要素を取得
//   let languageList = document.getElementById('languageList');
//   // リストの末尾から要素を削除（removeChildメソッド使用）
//   languageList.removeChild(languageList.lastElementChild);
// });


// changeイベントを利用してイベントハンドラを実行
// イベントハンドラを記述
// function handleChange(){ // functionで宣言
//   // 「すべてにチェックボックス」の要素を取得
//   const checkAll = document.getElementById('checkAll'); //const（後から値の書き換えを禁止するためにconstで変数を宣言）
//   // name属性がlanguageのチェックボックス要素を取得
//   const checkBoxes = document.getElementsByName('language');
//   // name属性がlanguageのチェックボックス要素をループ処理
//   for(let i = 0; i < checkBoxes.length; i++) {
//     // 各チェックボックスのチェック状態を、
//     //「すべてチェック」の状態に合わせる
//     checkBoxes[i].checked = checkAll.checked;
//   }
  
// }
// // checkAllボタンのchangeイベントのイベントハンドラを登録
// checkAll.addEventListener('change', handleChange, false);


// DOMConntentLoadedイベントとloadイベント
// DOMConntentLoadedイベントとは
// ・DOMツリーの構築が完了したタイミングで発生するイベント
// ・画像やスタイルシートなどの、依存するリソースの読みこみ前に発生する
// loadイベントとは
// ・ページ全体がスタイルシートや画像などの全ての依存するリソースを含めて読み込まれたときに発生するイベント


// 復習：ボタンをクリックしたら、テキスト文字の色が変わる
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   textColor.style.color = 'red';
// });

// 復習：変更ボタンで赤を追加（setAttributeメソッド）、戻るボタンで属性が外れる（removeAttributeメソッド）
// 1.変更ボタンで赤を追加（setAttributeメソッド）
// let triggerButton = document.getElementById('triggerButton');
// triggerButton.addEventListener('click', () => {
//   let textColor = document.getElementById('textColor');
//   textColor.setAttribute('class', 'red');
// });

// // 2.戻るボタンで属性が外れる（removeAttributeメソッド）
// let btnChange = document.getElementById('changeButton');
// btnChange.addEventListener('click', () => {
//   let textColor = document.getElementById('textColor');
//   textColor.removeAttribute('class');
// });