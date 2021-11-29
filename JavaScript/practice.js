'use strict';

// // 要素を取得（getElementByIdメソッド）
// let btn = document.getElementById('button');
// btn.addEventListener('click', () => {
//   // console.log('取得できました！');

//   // ※IDによるノードの取得（getElementByIdメソッド）
//   let headerTitle = document.getElementById('headerTitle'); //get(取得する)Element（要素を）ById（Idによって）
//   console.log(headerTitle);
  
//   // テキストの取得
//   console.log(headerTitle.textContent);
  
//   //テキストの置換
//   headerTitle.textContent = '見出し変更！' ;
//   headerTitle.style.color = 'red';

// });

// 指定した属性値の取得（getAttributeメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) { 
//   //IDによるノードの取得
//   let inputColorName = document.getElementById('inputColorName'); 
//   // 取得したインプット要素の入力値の取得
//   let colorNameText = inputColorName.value;
//   // 取得したインプット要素のname属性値を取得（getAttributeメソッド）
//   let inputName = inputColorName.getAttribute('name'); //getAttributeメソッドを使い、引数には取得したい属性名を記述
//   // idがindex.htmlのshowTextのp要素を取得
//   let showText = document.getElementById('showText');
//   // 出力
//   showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
// }, false);


// 属性の追加、更新、削除

// // 属性の追加、更新（赤）（setAttributeメソッド）
// let buttonRed = document.getElementById('buttonRed');
// buttonRed.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.setAttribute('class', 'red');
// });

// // 属性の追加、更新（青）（setAttributeメソッド）
// let buttonBlue = document.getElementById('buttonBlue');
// buttonBlue.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.setAttribute('class', 'blue');
// });

// // 属性の削除（removeAttributeメソッド）
// let buttonRemove = document.getElementById('buttonRemove');
// buttonRemove.addEventListener('click', () => {
//   let pTitle = document.getElementById('pTitle');
//   pTitle.removeAttribute('class');
// });


// タグ名で要素の取得（getElementsByTagNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByTagName('p');
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) {
//     console.log(elements[i].textContent);
//   }
// });


// name属性で要素の取得（getElementsByNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByName('inputText');
//   console.log(elements); // 戻り値は配列形式で値が取得
//   console.log(elements[0].value); //戻り値は配列形式で値が取得のため、インプット要素に入れた値を取るには、例えば、インデックスを指定してvalueプロパティを使って取り出す
// });


// クラス名で要素の取得（getElementsByClassNameメソッド）
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   let elements = document.getElementsByClassName('foo');
//   console.log(elements);
//   //配列形式の要素だけを取得するにはfor文を使用
//   for(let i = 0; i < elements.length; i++) { 
//   console.log(elements[i].textContent);
//   }
// });


// // セレクタで最初の要素を取得（querySelectorメソッド）
// // セレクタとは：CSSでスタイルを適用するための条件式
// // 例）あるクラスの最初に一致する要素を取得
// let btn = document.getElementById('triggerButton'); 
// btn.addEventListener('click', () => {
//   // let element = document.querySelector('.foo');//セレクタで最初の要素を取得（querySelectorメソッド）
//   // console.log(element); //戻り値は配列形式で値が取得
//   // console.log(element.textContent); //テキストのみ取得

//   let elements = document.querySelectorAll('.foo'); // セレクタで複数の要素を取得（querySelectorAllメソッド）
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) { //配列形式の要素（テキスト）だけを取得するにはfor文を使用
//   console.log(elements[i].textContent);
//   }
// });


// 要素の生成（createElementメソッド）、追加（appendChildメソッド）、削除（removeChildメソッド）
// 要素の追加
// let addButton = document.getElementById('addButton');
// addButton.addEventListener('click', () => {
//   //入力欄のinput要素を取得
//   let inputLanguage = document.getElementById('inputLanguage');
//   // input要素から文字列を取得
//   let language = inputLanguage.value;
//   // 入力値が空ならば、returnで以降の処理を実施しない条件処理
//   if (language === '') {
//     alert('未入力です');
//     return;
//   }
//   // li要素を生成（createElementメソッドを使用）
//   let listItem = document.createElement('li');
//   // li要素のコンテンツの入力された文字列を設定
//   listItem.textContent = language;
//   // ul要素を取得
//   let languageList = document.getElementById('languageList');
//   // リストの末尾に生成したli要素を追加（appendChildメソッド使用）
//   languageList.appendChild(listItem);
//   // 入力欄をクリア
//   inputLanguage.value = '';
// });

// // 要素の削除（removeChildメソッド使用））
// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener('click', () => {
//   // ul要素を取得
//   let languageList = document.getElementById('languageList');
//   // リストの末尾から要素を削除（removeChildメソッド使用）
//   languageList.removeChild(languageList.lastElementChild);
// });


// changeイベントを利用してイベントハンドラを実行
// イベントハンドラを記述
// function handleChange(){ // functionで宣言
//   // 「すべてにチェックボックス」の要素を取得
//   const checkAll = document.getElementById('checkAll'); //const（後から値の書き換えを禁止するためにconstで変数を宣言）
//   // name属性がlanguageのチェックボックス要素を取得
//   const checkBoxes = document.getElementsByName('language');
//   // name属性がlanguageのチェックボックス要素をループ処理
//   for(let i = 0; i < checkBoxes.length; i++) {
//     // 各チェックボックスのチェック状態を、
//     //「すべてチェック」の状態に合わせる
//     checkBoxes[i].checked = checkAll.checked;
//   }
  
// }
// // checkAllボタンのchangeイベントのイベントハンドラを登録
// checkAll.addEventListener('change', handleChange, false);


// DOMConntentLoadedイベントとloadイベント
// DOMConntentLoadedイベントとは
// ・DOMツリーの構築が完了したタイミングで発生するイベント
// ・画像やスタイルシートなどの、依存するリソースの読みこみ前に発生する
// loadイベントとは
// ・ページ全体がスタイルシートや画像などの全ての依存するリソースを含めて読み込まれたときに発生するイベント


// 復習：ボタンをクリックしたら、テキスト文字の色が変わる
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', () => {
//   textColor.style.color = 'red';
// });

// 復習：変更ボタンで赤を追加（setAttributeメソッド）、戻るボタンで属性が外れる（removeAttributeメソッド）
// 1.変更ボタンで赤を追加（setAttributeメソッド）
// let triggerButton = document.getElementById('triggerButton');
// triggerButton.addEventListener('click', () => {
//   let textColor = document.getElementById('textColor');
//   textColor.setAttribute('class', 'red');
// });

// // 2.戻るボタンで属性が外れる（removeAttributeメソッド）
// let btnChange = document.getElementById('changeButton');
// btnChange.addEventListener('click', () => {
//   let textColor = document.getElementById('textColor');
//   textColor.removeAttribute('class');
// });

// 練習：A .プルダウン（あいう） B. プルダウン（かきく）
// ボタンクリックしたら、Aの項目がBへ追加される
// function createPullDown () {
//   // プルダウンA  親要素の取得
//   let catA = document.getElementById('categoryA');
//   alert(catA);
//   catA.style.color = 'gray';
  
//   // 子要素の取得
//   let catChildA = catA.children;
//   alert(catChildA);
  
  
//   // プルダウンB  親要素の取得
//   let catB = document.getElementById('categoryB');
//   alert(catB);
//   catB.style.color = 'green';
// };

// 仮説２（NG）
// function createSelectBox(){
//   //連想配列の配列
//   let array = [
//     {val:"01", txt:"さしす"},
//     {val:"02", txt:"かきく"},
//     {val:"03", txt:"あいう"}
//   ];
 
//   // 連想配列をループ処理で値を取り出してセレクトボックスにセットする
//   for(let i = 0; i < array.length; i++){
//     let op = document.createElement("option");
//     op.value = array[i].val;  //value値
//     op.text = array[i].txt;   //テキスト値
//     // document.getElementById('categoryB').prepend(op); //categoryBを取得後、prependメソッドで先頭へ追加
//     let categoryB = document.getElementById("categoryB")
//     categoryB.option([value='6']).prepend(op);
//   }
// };

// 練習 (課題1)
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


// 練習1
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

// 練習2
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

// 練習3
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

// 練習4
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

// 練習5
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

// 課題3_復習 プルダウンAの「あいう、かきく」を、プルダウンB「さしす、たちつ」の下部へ追加
// ◆手順
// ①A親要素を取得
// ②A子要素を取得
// ③A子要素の数を取得
// ④Bの親要素を取得
// ⑤Bの親要素の末尾に、②子要素のインデックス番号を指定して追加
// （for文を使用）

// function cookPullDown() {
//   let cookAElm = document.getElementById('cookA');
//   let cookChildAElms = cookAElm.children;

//   let cookBElm = document.getElementById('cookB');
  
//   for (let i=1; i<cookChildAElms.length; i++) {
//     let addElm = document.createElement('option');
//     addElm.text = cookChildAElms[i].text;
//     addElm.value = cookChildAElms[i].value;
//     cookBElm.appendChild(addElm);
//   }
  
//   // 直書き(for文なし)
//   // let addElm = document.createElement('option');
//   // addElm.text = 'たまごやき';
//   // cookBElm.appendChild(addElm);

//   // let add2Elm = document.createElement('option');
//   // add2Elm.text = 'オムライス';
//   // cookBElm.appendChild(add2Elm);

//   // let add3Elm = document.createElement('option');
//   // add3Elm.text = 'ハンバーグ';
//   // cookBElm.appendChild(add3Elm);

// };

// 課題3_アレンジ プルダウンAの子要素を、プルダウンBの子要素の上部へ追加

// ◆手順
// ①A親要素を取得
// ②A子要素を取得
// ③B親要素を取得
// ④B子要素を取得
// ⑤B親要素の先頭に、②子要素を昇順で追加(for文)
//  【for文の中】
//   ⑥for文の繰り返し回数を指定
//   ⑦追加するA子要素index「0」は追加しない（index「0」になったらfor文を処理を抜ける「if break使用」）
//   ⑧B子要素に追加する要素を生成
//   ⑨追加する要素⑧に、A子要素のtext、valueを設定（追加）
//   ⑩B親要素のindex「0」の下にして（指定）、⑧子要素を追加

// function cookArrange() {
//   let cookAElm = document.getElementById('cookA');
//   let cookChildAElms = cookAElm.children;
//   // let cookChildALen = cookChildAElms.length;
//   // alert(cookChildALen);
//   let cookBElm = document.getElementById('cookB');
//   let cookChildBElms = cookBElm.children;

//   for (let i=3; i<cookChildAElms.length; i--) {
//     if (i == 0) {
//       break;
//     }
//     let addElm = document.createElement('option');
//     addElm.text = cookChildAElms[i].text;
//     addElm.value = cookChildAElms[i].value;
//     cookBElm.insertBefore(addElm, cookChildBElms[1]);
//   }
  
//   // 直書き(for文なし)
//   // let addElm = document.createElement('option');
//   // addElm.text = 'たまごやき';
//   // cookBElm.appendChild(addElm);

//   // let add2Elm = document.createElement('option');
//   // add2Elm.text = 'オムライス';
//   // cookBElm.appendChild(add2Elm);

//   // let add3Elm = document.createElement('option');
//   // add3Elm.text = 'ハンバーグ';
//   // cookBElm.appendChild(add3Elm);

// };

// // 自習2_ 親プルダウンの子要素を選択後、選択した子要素のプルダウンが表示
// // 条件：子要素のプルダウンは初期状態は非表示、親プルダウンで選択された時に表示される仕様

// // 手順
// // ①親プルダウンの親要素を取得
// // ②親プルダウンのvalue属性を代入
// // ③if文を使用して、親プルダウンの指定したvalue属性を選択したき、表示、非表示


// let meatElm = document.getElementById('meat');
// meatElm.style.display = 'none';

// let fishElm = document.getElementById('fish');
// fishElm.style.display = 'none';

// let vegeElm = document.getElementById('vegetable');
// vegeElm.style.display = 'none';

// function materialChange() {
//   let mateElm = document.getElementById('material');
//   let mateVal = mateElm.value; 
  
//   if (mateVal == '2') {
//     meatElm.style.display = 'block';
//     fishElm.style.display = 'none';
//     vegeElm.style.display = 'none';
//   } else if (mateVal == '3') {
//     meatElm.style.display = 'none';
//     fishElm.style.display = 'block';
//     vegeElm.style.display = 'none';
//   } else if (mateVal == '4') {
//     meatElm.style.display = 'none';
//     fishElm.style.display = 'none';
//     vegeElm.style.display = 'block';
//   } else {
//     meatElm.style.display = 'none';
//     fishElm.style.display = 'none';
//     vegeElm.style.display = 'none';
//   }

// };

// 学習3_通知設定（ラジオボタン）側のHTML作成
// 学習4_

手順
①親プルダウンの親要素を取得
②親プルダウンのvalue属性を代入
③if文を使用して、親プルダウンの指定したvalue属性を選択したき、表示、非表示