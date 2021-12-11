'use strict';

// 以下課題の復習など

// 復習 (課題1)
// function pullDown2() {
//   // プルダウンA 要素取得
//   let changeA = document.getElementById('pullA');
//   alert(changeA);
//   changeA.style.backgroundColor = 'blue';

//   // プルダウンA 子要素取得
//   let changeChildA = document.getElementById('pullA');
//   let getChildA = changeChildA.children;
//   alert(getChildA);
//   console.log('getChildA'); // 子要素を取得
   
//   // // Aの子要素（option）をfor文で繰り返す
//   // for (let i = 0; i < getChildA.length; i++) { // let i = 0;でi（index）を初期化（index0から始まる。1なら1から始まる）、i < getChildA.length;でAの子要素（option）の長さ（子要素の数）だけ処理を繰り返す。i++でiを1ずつ足していく。
//   //   console.log(getChildA[i]); // 
//   // }

//   // プルダウンB 要素取得
//   let changeB = document.getElementById('pullB');
//   alert(changeB);
//   changeB.style.backgroundColor = 'green';

// };


// 復習1：要素を取得、変更
// 要素の取得
// function placeContent() {
//   let placeElm = document.getElementById('placeBox'); // 親要素を取得：OK
//   // placeElm.style.color = 'red' // 親要素のスタイルカラーを変える：OK

//   let placeChildElms = placeElm.children; // 子要素を取得：OK
//   placeChildElms[0].id = 'place'; // 子要素のidを取得：OK // childrenの戻り値は配列になる為、インデックス番号で取得
//   placeChildElms[0].style.color = 'red';  // 子要素のスタイルカラーを変える：OK
//   placeChildElms[1].style.color = 'blue'; // 子要素の2番目のスタイルカラーを変える：OK
//   placeChildElms[2].classList = 'mountain'; // 子要素のクラスの取得：OK
//   placeChildElms[2].classList = 'mountain2'; // 子要素のクラスの変更：OK
  
//   let takaElm = document.getElementById('taka'); // 要素の取得：OK
//   takaElm.value = 'bbb'; // value値を変更する：OK
//   takaElm.value = takaElm.value + '様'; // value値に様をつける:OK
  
//   let sekoElm = document.getElementById('seko'); // 要素の取得
//   sekoElm.value = '100'; // valueを変更：OK
//   sekoElm.style.border = '10px solid'; //styleを変更：OK
//   sekoElm.id = 'seko2'; // idを変更：OK
//   sekoElm.type = 'button'; // typeをボタンへ変更：OK

//   let placeButtonElm = document.getElementById('placeButton'); // 要素の取得
//   placeButtonElm.id = 'abc' // 要素のidを変更：OK
//   placeButtonElm.type = 'text'; // 要素のtypeを変更：OK
// };

// 復習2：要素を取得、変更
// function foodContent() {
//   let foodElm = document.getElementById('foodBox');
//   foodElm.style.color = 'orange';

//   let foodChildElms = foodElm.children; 
//   foodChildElms[0].style.color = 'red';
//   foodChildElms[0].id = 'food';
//   foodChildElms[3].style.backgroundColor = 'gray';
//   foodChildElms[1].classList = 'meat';
//   foodChildElms[1].classList = '肉';
//   foodChildElms[2].id = 'fish';
//   foodChildElms[2].style.color = 'blue';

//   let foodButtonElm = document.getElementById('foodButton');
//   foodButtonElm.type = 'text';
//   foodButtonElm.id = 'お肉ボタン'
//   foodButtonElm.value = '食べ物ボタン';

// };

// 復習3：要素の取得、変更
// function vehicleContent() {
//   let vehicleElms = document.getElementsByClassName('vehicleBox');
//   vehicleElms[0].style.color = 'green'; // classの戻り値は配列になるため、インデックス番号で取得
  
//   let vehicleChildElms = vehicleElms[0].children; // 子要素取得（h3,ul）
//   // console.log(vehicleChildElms);
//   vehicleChildElms[0].style.color = 'orange';
//   vehicleChildElms[1].style.color = 'blue';
//   // console.log(vehicleChildElms[0]);
//   // console.log(vehicleChildElms[1]);

//   let vehicleGrandChildElms = vehicleChildElms[1].children; // 孫要素（子要素の中の子要素）取得（li）
//   // dconsole.log(vehicleGrandChildElms[0]);
//   vehicleGrandChildElms[0].style.color = 'green';
//   vehicleGrandChildElms[0].id = 'car';
//   vehicleGrandChildElms[0].id = '車';
//   vehicleGrandChildElms[1].style.backgroundColor = 'gray';
//   vehicleGrandChildElms[1].classList = 'bike';
//   vehicleGrandChildElms[1].classList = 'バイク';
//   vehicleGrandChildElms[2].style.color = 'red';
//   vehicleGrandChildElms[2].id = 'bus';
//   vehicleGrandChildElms[2].id = vehicleGrandChildElms[2].id + 'バス';

//   let vehicleTextElm = document.getElementById('vehicleText');
//   vehicleTextElm.value = '乗物テキスト';
//   vehicleTextElm.value = '';
//   vehicleTextElm.value = '乗物テキスト再';
//   vehicleTextElm.id = '乗物入力欄';
//   vehicleTextElm.style.border = 'red 3px solid';
//   vehicleTextElm.type = 'button';
  
//   let vehicleButtonElm = document.getElementById('vehicleButton');
//   vehicleButtonElm.value = '乗物ボタン';
//   vehicleButtonElm.id = '乗物ボタン';
//   vehicleButtonElm.type = 'text';

// };

// 復習4：要素の取得、変更
// プルダウン(Aの選択項目を削除→Bの選択項目へ追加)
// function childPullDown() {
//   let likeVegElm = document.getElementById('likeVeg');
//   let likeVegChildElms = likeVegElm.children;
//   let likeCookElm = document.getElementById('likeCook');
//   let likeChildCookElms = likeCookElm.children;
//   likeCookElm.insertBefore(likeVegChildElms[1], likeChildCookElms[1]);
//   likeCookElm.insertBefore(likeVegChildElms[1], likeChildCookElms[2]);
//   likeCookElm.insertBefore(likeVegChildElms[1], likeChildCookElms[3]);
  
//   // for文を試したがまだ出来ない、、
//   // for (let i = 0; i < likeVegChildElms.length; i++) {
//   //   console.log(likeVegChildElms);
//   // }
// };

// 復習5（課題2：ボタンクリックしたら、「div消えて〜」が削除されて→「div追加」が表示される）
// function task2Button() {
//   let parElm = document.getElementById('parent');
//   let parChildElms = parElm.children;
//   parChildElms[0].remove();
//   let addElm = document.createElement('div');
//   addElm.textContent = '追加〜〜';
//   parElm.appendChild(addElm);
// };


// function buttonObj() {
//   // idで要素（h1）を取得（getElementByIdメソッド）
//   let place = document.getElementById('place');
//   place.style.color = 'red';

//   // idで要素（p）を取得（getElementByIdメソッド）
//   let mountain = document.getElementById('mountain');
//   mountain.style.backgroundColor = 'gray';
  
//   // タグ名で要素（div）を取得(getElementsByTagNameメソッド)
//   let tagName = document.getElementsByTagName('h2');
//   alert(tagName);
//   console.log(tagName);
  
//   // class名で要素（ul）を取得（getElementsByClassNameメソッド）
//   let vehicleList  = document.getElementsByClassName('vehicleList');
//   alert(vehicleList);
//   console.log(vehicleList);

//   // nameで要素を取得（getElementsByClassNameメソッド）
//   let textName = document.getElementsByName('textName');
//   console.log(textName); 
// };

// // イベント（onChange）
// function changeObj(value) {
//   let textChange = document.getElementById('textChange');
//   console.log(textChange + value);

// };