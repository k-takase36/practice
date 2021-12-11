'use strict';

// 課題：A .プルダウン（あいう） B. プルダウン（かきく）
// ボタンクリックしたら、Aの項目がBへ追加される

function task1PullDown() { // funstionで関数宣言し、createSelectBox関数名を定義
  let takaElm = document.getElementById('taka');
  // let sekoElm = document.getElementById('seko');
  takaElm.value =  takaElm.value + '様';

  // ①プルダウンA 要素を取得
  let catAElm = document.getElementById('categoryA'); // documentのgetElementByIdメソッドで、HTMLのA要素（select）のID(categoryA)を取得して、変数catAへ代入
  // alert(catAElm); // alertメソッドで、変数（catA）を表示 （上記でA要素のIDを取得してcatAへ代入してるため、alert(catA)とすれば、A要素を表示できる
  catAElm.style.backgroundColor = 'red'; //  変数(catA)の背景色を赤へ変更
  catAElm.style.border = '5px solid green';
  catAElm.style.borderColor = 'yellow';
  
  // ②_1 プルダウンAの子要素を取得
  let catAChildElms = catAElm.children; // childrenプロパティで、HTMLのAの子要素（option）を取得、変数getChildAへ代入
  // alert(catAChildElms[1].value); // alertメソッドで、変数（getChildA）を表示
  catAChildElms[0].value = catAChildElms[0].value * 10;
  catAChildElms[1].value = catAChildElms[1].value * 10;
  catAChildElms[2].value = catAChildElms[2].value * 10;
  catAChildElms[3].value = catAChildElms[3].value * 10;

  // ②_2 Aの子要素の属性(value)「1」「2」「3」を取得する（※未着手）

  // ③プルダウンBの要素を取得
  let catB = document.getElementById('categoryB'); // documentのgetElementByIdメソッドで、HTMLのB要素（select）のID(categoryB)を取得して、変数catBへ代入
  alert(catB); // alertメソッドで変数（catB）を表示 （上記でB要素のIDを取得してcatBへ代入してるため、alert(catB)とすれば、B要素を表示できる
  catB.style.backgroundColor = 'yellow'; // 変数(catB)の背景色を赤へ変更
  console.log(catB);

  // ④カテゴリーBに②を差し込む（追加する）（※未着手）
  // 自分で実施したができず。。課題2以降で教えていただき実施
};