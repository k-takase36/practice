'use strict';

// 課題：A .プルダウン（あいう） B. プルダウン（かきく）
// ボタンクリックしたら、Aの項目がBへ追加される

function createPullDown() { // funstionで関数宣言し、createSelectBox関数名を定義
  // let takaElm = document.getElementById('taka');
  // // let sekoElm = document.getElementById('seko');
  // takaElm.value =  takaElm.value + '様';

  // ①プルダウンA 要素を取得
  // let catAElm = document.getElementById('categoryA'); // documentのgetElementByIdメソッドで、HTMLのA要素（select）のID(categoryA)を取得して、変数catAへ代入
  // // alert(catAElm); // alertメソッドで、変数（catA）を表示 （上記でA要素のIDを取得してcatAへ代入してるため、alert(catA)とすれば、A要素を表示できる
  // catAElm.style.backgroundColor = 'red'; //  変数(catA)の背景色を赤へ変更
  // catAElm.style.border = '5px solid green';
  // catAElm.style.borderColor = 'yellow';
  
  // // ②_1 プルダウンAの子要素を取得
  // let catAChildElms = catAElm.children; // childrenプロパティで、HTMLのAの子要素（option）を取得、変数getChildAへ代入
  // // alert(catAChildElms[1].value); // alertメソッドで、変数（getChildA）を表示
  // catAChildElms[0].value = catAChildElms[0].value * 10;
  // catAChildElms[1].value = catAChildElms[1].value * 10;
  // catAChildElms[2].value = catAChildElms[2].value * 10;
  // catAChildElms[3].value = catAChildElms[3].value * 10;

  // ②_2 Aの子要素の属性(value)「1」「2」「3」を取得する（※未着手）

  // ③プルダウンBの要素を取得
  // let catB = document.getElementById('categoryB'); // documentのgetElementByIdメソッドで、HTMLのB要素（select）のID(categoryB)を取得して、変数catBへ代入
  // alert(catB); // alertメソッドで変数（catB）を表示 （上記でB要素のIDを取得してcatBへ代入してるため、alert(catB)とすれば、B要素を表示できる
  // catB.style.backgroundColor = 'yellow'; // 変数(catB)の背景色を赤へ変更
  // console.log(catB);

  // ④カテゴリーBに②を差し込む（追加する）（※未着手）
  
  // 課題2：ボタンクリックしたら、「div消えて〜」が削除されて→「div追加」が表示される
  // 要素の削除、作成、追加

  // ①div親要素を取得（getElementByIdメソッド）
  let parElm = document.getElementById('parent'); // documentのgetElementByIdメソッドで、HTMLのdiv親要素（parent）のIDを取得して、変数parElmへ代入
  parElm.style.backgroundColor = 'orange'; // 変数(parElm)の背景色をオレンジ色へ変更

  // ②削除するdiv子要素を取得（getElementByIdメソッド）
  let delElm = document.getElementById('delete'); // 削除するdiv子要素(delete)を取得

  delElm.remove(); //削除する

  // ③div要素を削除する（removeChildメソッド：書き方「親要素.removeChildメソッド.削除する子要素」
  // parElm.removeChild(delElm); // removeChildメソッドで、div親要素(parElm)の子要素（delElm）削除する。
  
  // ④追加するdiv要素を作成（createElementメソッド：（）内にタグ名を入れる）
  let addElm = document.createElement('div'); // createElementメソッドで、div要素を作成してaddElmへ代入
  addElm.id = 'add'; // div要素のidを'add'と設定
  addElm.textContent = '追加〜〜'; // div要素のテキストを設定
  
  // ⑤div親要素に、④で作成したdiv要素を追加（appendChildメソッド：書き方「親要素.appendChild.追加する子要素」
  parElm.appendChild(addElm); // appendChildメソッドで子要素（子要素の1番最後に）として、div要素（addElm）を追加
  
  // 親要素に子要素を取得
  // 子要素を取得
  
  // 基本的な構成は変わらない
  // ①要素の取得
  // ②取得した要素に対して、「要素.属性 = ○○」で、変更する

};