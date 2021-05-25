//funktion til videoer

function HideFunction(klasse) { //opretter funktion der skal bruge et enkelt argument
    document.querySelector(klasse).style.display = 'none'; //gør kassen usynlig
      document.querySelector(klasse).parentElement.scrollIntoView(); //sørger for at gå til det rigtige sted på siden
  }

function ShowHideFunction(klasse) { //funktion der skal bruge en klasse som argument
  if (document.querySelector(klasse).style.display != 'grid') { // hvis kassen ikke er synlig (er usynlig)
    var matches = document.querySelectorAll('.tjek') // laver variabel, liste der inhelder alle elementer med klassen tjek
    for (i = 0; i < matches.length; i++) { // lopper igennm hele listen
      matches[i].style.display = 'none'; //gør boksen usynlig, på alle i listen
    }
    document.querySelector(klasse).style.display = 'grid'; // gør boksen synlig (den der er argument fra)
    document.querySelector(klasse).parentElement.scrollIntoView(); //sørger for at gå til det rigtige sted på siden
  } else {
    document.querySelector(klasse).style.display = 'none'; // gør den usyblig, hvis den er synlig
  }}
