'use strict';

// 課題：A .プルダウン（あいう） B. プルダウン（かきく）
// ボタンクリックしたら、Aの項目がBへ追加される

function task2PullDown() { // funstionで関数宣言し、createSelectBox関数名を定義
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

  // // ①div親要素を取得（getElementByIdメソッド）
  // let parElm = document.getElementById('parent'); // documentのgetElementByIdメソッドで、HTMLのdiv親要素（parent）のIDを取得して、変数parElmへ代入
  // parElm.style.backgroundColor = 'orange'; // 変数(parElm)の背景色をオレンジ色へ変更

  // // ②削除するdiv子要素を取得（getElementByIdメソッド）
  // let delElm = document.getElementById('delete'); // 削除するdiv子要素(delete)を取得

  // delElm.remove(); //削除する

  // // ③div要素を削除する（removeChildメソッド：書き方「親要素.removeChildメソッド.削除する子要素」
  // // parElm.removeChild(delElm); // removeChildメソッドで、div親要素(parElm)の子要素（delElm）削除する。
  
  // // ④追加するdiv要素を作成（createElementメソッド：（）内にタグ名を入れる）
  // let addElm = document.createElement('div'); // createElementメソッドで、div要素を作成してaddElmへ代入
  // addElm.id = 'add'; // div要素のidを'add'と設定
  // addElm.textContent = '追加〜〜'; // div要素のテキストを設定
  
  // // ⑤div親要素に、④で作成したdiv要素を追加（appendChildメソッド：書き方「親要素.appendChild.追加する子要素」
  // parElm.appendChild(addElm); // appendChildメソッドで子要素（子要素の1番最後に）として、div要素（addElm）を追加
  

  // 課題2_1：子要素のidがない状態で、ボタンクリックしたら、子要素のidがない中で、親要素と子要素を取得して子要素（div）を削除する

  // ①親要素を取得
  let parElm = document.getElementById('parent');
  // alert(parElm);

  // ②子要素を取得
  let parChildElms = parElm.children; 
  // alert(parChildElms);

  // ③子要素を削除
  // parChildElms[0].style.color = 'red';
  // parChildElms[1].style.color = 'red';
  // parChildElms[2].style.color = 'red';
  var childLen = parElm.children.length;
  // alert(parChildElms[0].style.color);
  for (var i=0; i<childLen; i++) {
    // parChildElms[i].remove();
    parChildElms[0].remove();
  }
  // alert(childLen);
  // parChildElms[0].remove();
  // parChildElms[0].remove();
  // parChildElms[0].remove();

  // ④追加する要素を作成
    let addElm = document.createElement('div');
    addElm.textContent = '追加〜〜1';
    // addElm.style.backgroundColor = 'yellow'
    // addElm.id = 'add';
  
    // ⑤親要素に、④の要素を追加
    parElm.appendChild(addElm);

};

// 課題3 プルダウンAの「あいう、かきく」を、プルダウンB「さしす、たちつ」の下部へ追加
// ◆手順
// ①A親要素を取得
// ②A子要素を取得
// ③A子要素の数を取得
// ④Bの親要素を取得
// ⑤Bの親要素の末尾に、②子要素のインデックス番号を指定して追加
// （for文を使用）

function createPullDown() {

  // 書き方①（プルダウンA「あいう、かきく」を残し、プルダウンB「さしす、たちつ」の下部へ追加、）
  let catAElm = document.getElementById('catA'); 
  let catChildAElms = catAElm.children;
  let catChildALen = catAElm.children.length;
  let catBElm = document.getElementById('catB');

  for (let i=1; i<catChildALen; i++) {
    let addElm = document.createElement('option');
    addElm.text = catChildAElms[i].text;
    catBElm.appendChild(addElm);
  }

  // 書き方①（プルダウンA「あいう、かきく」を残さないで、プルダウンB「さしす、たちつ」の下部へ追加、）
  // let catAElm = document.getElementById('catA'); 
  // let catChildAElms = catAElm.children;
  // let catChildALen = catAElm.children.length;
  // let catBElm = document.getElementById('catB');

  // for (let i = 0; i < catChildALen; i++) {
  //   catBElm.appendChild(catChildAElms[1]);
  // }
  
};

// ①要素を取得
// ②要素のスタイル属性を指定して、初期状態を非表示にする
// ③イベント発生後、要素のスタイルを表示にする


let aElm = document.getElementById('a');
aElm.style.display = 'none'

let kaElm = document.getElementById('ka');
kaElm.style.display = 'none'

function createRadio() {
  let aRadioElm = document.getElementById('aRadio');
  let kaRadioElm = document.getElementById('kaRadio');

  if (aRadioElm.checked){
    aElm.style.display = 'block';
    kaElm.style.display = 'none'
  } else if(kaRadioElm.checked) {
    kaElm.style.display = 'block';
    aElm.style.display = 'none'
  }
};