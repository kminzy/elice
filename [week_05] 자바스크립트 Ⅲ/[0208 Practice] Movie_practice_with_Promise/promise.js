const posts = [{
    title: 'Post 1',
    body: "첫번째 게시글입니다."
  },
  {
    title: 'Post 2',
    body: "두번째 게시글입니다."
  },

];

function getPosts() {
  setTimeout(() => {
    console.log('get posts')

  }, 1000);
}


//1.` createPost()`함수는 에러없이 성공적으로 호출됐을 때의 `resolve`와 에러를 받아들이는 `reject`를 실행합니다.
//`setTimeout()`내에 인자로 받아온 post를 push 하고 resolve와 reject(에러가 발생했을 경우) 실행하는 코드를 작성하세요.
function createPost() {
  return new Promise(() => {
    setTimeout(() => {
    console.log('create post');
    } , 2000);
});
}

getPosts();
createPost({
  title: 'Post 3',
  body: '세번째 게시글입니다.'
}).then(getPosts).catch(err => console.log(err));



// 위에서 작성된 코드는, post를 생성하기 전에 getpost가 실행되고(setTimeout), 그 후에 createPost가 실행
// 시간 간격에 따라 결과가 달라지게 된다.
// 이렇게 되면 createPost가 완료되는 시점을 모른다.
// reject, resolve를 통해 비동기 처리 간의 순서를 명확하게 할 수 있다.
