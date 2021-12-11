'use strict';

function task2PullDown() { 
  
  // // 課題2：ボタンクリックしたら、「div消えて〜」が削除されて→「div追加」が表示される
  // // （親要素と子要素を取得して子要素（div）を削除（子要素のidがない状態）

  // ①親要素を取得
  let parElm = document.getElementById('parent');
  // alert(parElm);

  // ②削除する子要素を取得
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
    addElm.style.backgroundColor = 'yellow'
    // addElm.id = 'add';
  
    // ⑤親要素に、④の要素を追加
    parElm.appendChild(addElm);

};