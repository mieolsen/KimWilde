//funktion til videoer

function ShowHideFunction(klasse) {
  if (document.querySelector(klasse).style.display != 'grid') {
    var matches = document.querySelectorAll('.tjek')
    for (i = 0; i < matches.length; i++) {
      matches[i].style.display = 'none';
    }
    document.querySelector(klasse).style.display = 'grid';
    document.querySelector(klasse).parentElement.scrollIntoView(); //sørger for at gå til det rigtige sted på siden
  } else {
    document.querySelector(klasse).style.display = 'none';
  }
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
