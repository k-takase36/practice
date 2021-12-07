'use strict';

// 自習2（課題3アレンジ）_ボタンクリックすると、プルダウンAの子要素を、プルダウンBの子要素の上部へ追加

// ◆手順
// ①A親要素を取得
// ②A子要素を取得
// ③B親要素を取得
// ④B子要素を取得
// ⑤B親要素の先頭に、②子要素を昇順で追加(for文)
// 【for文の中】
// ⑥for文の条件を記載（変数定義、繰り返し回数を指定、カウンタ指定）
// ⑦A子要素のindex「0」は追加しない処理を記載（if break使用→ index「0」になったらfor文を処理を抜ける処理）
// ⑧B子要素に追加する要素を生成
// ⑨追加する要素⑧に、A子要素のtext、valueを設定（追加）
// ⑩B親要素のindex「0」の下に指定して、⑧子要素を追加

// document.querySelector('cookA') 使うと良い

function cookChange() {
  let cookAElm = document.getElementById('cookA');
  let cookChildAElms = cookAElm.children;
  let cookBElm = document.getElementById('cookB');
  let cookChildBElms = cookBElm.children;

  // cookChildAElmsを入れ替える処理
  // for (let i = 1; i < cookChildAElms.length; i++) {
  //   cookAElm.insertBefore(cookChildAElms[i], cookChildAElms[0]);
  // }
  let addElm = document.createElement('option');
  addElm.text = cookChildAElms[i].text;
  addElm.value = cookChildAElms[i].value;
  let addChildElms = addElm.children;
  for (let i=1; i<addChildElms.length; i++) {
    addElm.insertBefore(addChildElms[i], addChildElms[0]);
  }
  
  // for文をi=0 i++に
  for (let i=1; i<cookChildAElms.length; i++) {
    // if (i == 0) {
      //     break;
      //   }    
      

      cookBElm.insertBefore(addElm, cookChildBElms[1]);
    }

};