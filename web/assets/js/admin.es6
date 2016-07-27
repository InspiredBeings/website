class PostFormComponent {
  constructor($node) {
    console.log(123)
    $node.addEventListener('keyup', this.d)
  }

  d() {
    console.log(456)
  }
}

const $postTitleInput = document.querySelector('#post_title')
if ($postTitleInput) {
  new PostFormComponent($postTitleInput)
}
