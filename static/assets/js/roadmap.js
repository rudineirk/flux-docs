'use strict';

(function () {
  let changes = document.querySelectorAll('.roadmap-version li');
  changes.forEach(change => {
    if (change.children.length === 0) {
      return
    }

    let label = change.children[0]
    if (typeof label === 'undefined') return
    let checkbox = label.children[0]
    if (typeof checkbox === 'undefined') return
    if (checkbox.checked) {
      change.classList.add('done')
    } else {
      change.classList.add('inprogress')
    }
  })
})()
