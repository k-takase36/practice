'use strict';

// 学習3_通知設定（ラジオボタン）側のHTML作成  CPR
// 学習4_通知設定（ラジオボタン）側のJS作成 CPR

// 手順
// ①親プルダウンの親要素を取得
// ②親プルダウンのvalue属性を代入
// ③if文を使用して、親プルダウンの指定したvalue属性を選択したき、表示、非表示

let overallBoxElm = document.getElementById('overall-box');
overallBoxElm.style.display = '';

let detailBoxElm = document.getElementById('detail-box');
detailBoxElm.style.display = 'none';

function changeGlobalSetting(){
  let overallBoxElm = document.getElementById('overall-box');
  let detailBoxElm = document.getElementById('detail-box');

  overallBoxElm.style.display = '';
  detailBoxElm.style.display = 'none';
  
};

function changeAdvancedSetting(){
  let overallBoxElm = document.getElementById('overall-box');
  let detailBoxElm = document.getElementById('detail-box');

  overallBoxElm.style.display = 'none';
  detailBoxElm.style.display = '';

};