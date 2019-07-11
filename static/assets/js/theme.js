'use strict';

$(document).ready(function () {
  let tables = document.getElementsByTagName('table')
  let tablesLen = tables !== null ? tables.length : 0

  for (let i=0; i < tablesLen; i++) {
    if (!tables[i].className) {
      tables[i].className += 'table table-striped'
    }
  }

  let search = document.getElementById('search')
  let searchClearBtn = document.getElementById('search-clear')
  if (search) {
    searchClearBtn.addEventListener('click', () => {
      search.value = ''
    })
  }
})
