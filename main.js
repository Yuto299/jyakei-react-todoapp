const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = ''; // 入力欄を空にする
  // alert(inputText);

  //liの要素を作成
  const li = document.createElement('li');
  console.log(li);

  //divの要素を作成
  const div = document.createElement('div');
  div.className = 'list-row'; // classを付与
  console.log(div);

  //pの要素を作成
  const p = document.createElement('p');
  p.className = 'todo-item'; // classを付与
  p.innerText = inputText; // 入力された値をpタグに設定
  console.log(p);

  //button（完了）の要素を作成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了'; // ボタンのテキストを設定

  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest('li'); // liを取得（moveTargetの中身は常に変化してる）
    completeButton.nextElementSibling.remove(); // 削除ボタンを削除（完了のTODOには引き継がないから）
    completeButton.remove(); // 完了ボタンを削除
    const backButton = document.createElement('button'); // 戻すボタンを作成
    backButton.innerText = '戻す'; // ボタンのテキストを設定
    backButton.addEventListener('click', () => {}); // 戻すボタンを押したときの処理
    moveTarget.firstElementChild.appendChild(backButton); // liの中に戻すボタンを追加
    document.getElementById('complete-list').appendChild(moveTarget); // 完了リストに追加
  }); //appendChildはコピーじゃない。移動になる。

  //button（削除）の要素を作成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除'; // ボタンのテキストを設定

  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest('li'); // liを取得
    document.getElementById('incomplete-list').removeChild(deleteTarget); // liを削除
  });

  //階層構造を作成
  div.appendChild(p); // divの中にpを追加
  div.appendChild(completeButton); // divの中に完了ボタンを追加
  div.appendChild(deleteButton); // divの中に削除ボタンを追加
  li.appendChild(div); // liの中にdivを追加

  //未完了リストに追加する
  document.getElementById('incomplete-list').appendChild(li); // ulの中にliを追加
};

//ここでbuttonタグにidを付与してから、追加の実装を行う
document.getElementById('add-button').addEventListener('click', onClickAdd);

//document.getElementById('add-button').addEventListener('click', onClickAdd);
//上記の行が実行されなければ、他のイベントを使用することができない。よってonClickAddがすべてのスタート地点になる。
