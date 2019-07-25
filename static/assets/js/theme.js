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

$(document).ready(function() {
  var msgText = linkCopiedText || "Link copied to clipboard!";

  // Add link button for every
  $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function(index, html){
    var element = $(this);
    var url = encodeURI(document.location.origin + document.location.pathname);
    var link = url + "#"+element[0].id;

    return " <span class=\"anchor\" data-toggle=\"tooltip\" title=\"\" data-clipboard-text=\"" + link + "\">" +
      "<i class=\"fas fa-link\"></i>" +
      "</span>";
  });

  var text, clip = new ClipboardJS('.anchor');

  $(".anchor").on('mouseleave', function(e) {
    $(this).tooltip('hide');
    $(this).attr('data-original-title', null);
    // $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
  });

  clip.on('success', function(e) {
      e.clearSelection();
      // $(e.trigger).attr('aria-label', 'Link copied to clipboard!').addClass('tooltipped tooltipped-s');
      $(e.trigger).attr('data-original-title', msgText);
      $(e.trigger).tooltip('show');
  });

  $('[data-toggle="tooltip"]').tooltip('hide')
})

$(document).ready(function() {
  $('.datatables ~ table').DataTable();
});

$(document).ready(function() {
  mermaid.initialize({startOnLoad: true});
});
