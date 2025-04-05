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

  //階層構造を作成
  div.appendChild(p); // divの中にpを追加
  li.appendChild(div); // liの中にdivを追加

  //未完了リストに追加する
  document.getElementById('incomplete-list').appendChild(li); // ulの中にliを追加
};

//ここでbuttonタグにidを付与してから、追加の実装を行う
document.getElementById('add-button').addEventListener('click', onClickAdd);
