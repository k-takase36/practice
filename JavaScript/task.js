'use strict';

// 課題：A .プルダウン（あいう） B. プルダウン（かきく）
// ボタンクリックしたら、Aの項目がBへ追加される

function createPullDown() { // funstionで関数宣言し、createSelectBox関数名を定義
  // プルダウンA
  let catA = document.getElementById('categoryA'); // documentのgetElementByIdメソッドで、HTMLのA要素（select）のID(categoryA)を取得して、変数catAへ代入
  alert(catA); // alertメソッドで、変数（catA）を表示 （上記でA要素のIDを取得してcatAへ代入してるため、alert(catA)とすれば、A要素を表示できる
  catA.style.backgroundColor = 'red'; //  変数(catA)の背景色を赤へ変更
  
  let catChildA = catA.children; // childrenプロパティで、HTMLのAの子要素（option）を取得、変数catChildAへ代入
  alert(catChildA); // alertメソッドで、変数（catChildA）を表示
  // console.log(catChildA);
  
  // for (let i = 0; i < catChildA.length; i++) { // Aの子要素（option）の
  //   console.log(catChildA[i]);
  // }

  // プルダウンB
  let catB = document.getElementById('categoryB'); // documentのgetElementByIdメソッドで、HTMLのB要素（select）のID(categoryB)を取得して、変数catBへ代入
  alert(catB); // alertメソッドで変数（catB）を表示 （上記でB要素のIDを取得してcatBへ代入してるため、alert(catB)とすれば、B要素を表示できる
  catB.style.backgroundColor = 'yellow'; // 変数(catB)の背景色を赤へ変更

};