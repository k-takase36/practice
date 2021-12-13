'use strict';

// 学習5：テキストエリアへ入力すると、入力したテキスト数をカウントして表示する

// 手順
// ① テキストエリアの要素の取得
// ② カウント表示する要素の取得
// ③ テキストエリアのテキスト数の属性を取得
// ④ ③の分だけ、カウントするイベント処理を記述

// 実装1：Pure JS（Vanilla JS）
function keyUpText() {
  let textElm = document.getElementById('text');
  let countElm = document.getElementById('count');
  let inputText = textElm.value;
  countElm.textContent = inputText.length;
};

// 実装2：イベントリスナーの実装
let text2Elm = document.getElementById('text2');
let count2Elm = document.getElementById('count2');

text2Elm.addEventListener('keyup', () => {
  let inputText = text2Elm.value;
  count2Elm.textContent = inputText.length;
});


// 実装1：Pure JS（Vanilla JS）
function keyUpTextarea() {
  let textareaElm = document.getElementById('textarea');
  let countupElm = document.getElementById('countup');
  let inputTextarea = textareaElm.value;
  countupElm.textContent = inputTextarea.length;
  countupElm.style.color = 'red';
};

// 実装2：イベントリスナーの実装
let textarea2Elm = document.getElementById('textarea2');
let countup2Elm = document.getElementById('countup2');

textarea2Elm.addEventListener('keyup', () => {
  let inputTextarea2 = textarea2Elm.value;
  countup2Elm.textContent = inputTextarea2.length;
  countup2Elm.style.color = 'orange';
});