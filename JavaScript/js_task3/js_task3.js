'use strict';

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