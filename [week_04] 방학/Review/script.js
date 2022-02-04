let mode = 'CREATE';
let selectedId = 1;
let nextId = 4;
let topics = [{
    id: 1,
    title: 'html',
    content: 'HyperText Markup Language'
  },
  {
    id: 2,
    title: 'css',
    content: 'Cascading Style Sheets'
  },
  {
    id: 3,
    title: 'js',
    content: 'JavaScript'
  }
];

function createLi() {
  let liTag = '';

  for (let i = 0; i < topics.length; i++) {
    let topic = topics[i];
    liTag += `<li><a href="/read/${topic.id}" onclick="
              event.preventDefault();
              mode = 'READ';
              selectedId = ${topic.id};
              createDiv();
              ">${topic.title}</a></li>`;
  }
  document.querySelector('.topics > ol').innerHTML = liTag;
}
createLi();


function createDiv() {
  let divTag = '';

  if (mode === 'WELCOME') {
    divTag = `<h2>🎊 Welcome!</h2>`;
  } else if (mode === 'READ') {
    for (let i = 0; i < topics.length; i++) {
      let topic = topics[i];

      if (topic.id === selectedId) {
        divTag = `<h2>${topic.title}</h2>${topic.content}`;
      }
    }
  } else {
    divTag = '';
  }

  document.querySelector('.result_area').innerHTML = divTag;
}
createDiv();

function createInput() {
  let inputTag = '';

  if (mode === 'CREATE') {
    inputTag = `
          <form onsubmit="
            event.preventDefault();
            let title = event.target.title.value;
            let content = event.target.content.value;
            topics.push({id: nextId, title: title, content: content});
            createLi();
            mode = 'READ';
            selectedId = nextId;
            createDiv();
            nextId += 1;
          ">
            <div class="input-group mb-3">
              <span class="input-group-text">Title</span>
              <input type="text" class="form-control" name="title" placeholder="title">
            </div>
            <div class="input-group">
              <span class="input-group-text">Content</span>
              <textarea class="form-control" aria-label="With textarea" name="content" placeholder="content"></textarea>
            </div>
            <div class="input-group mb-3" style="margin-top: 10px;">
              <input type="submit" value="Create">
            </div>
          </form>
        `;
  } else {
    inputTag = '';
  }

  document.querySelector('.input_line').innerHTML = inputTag;
}