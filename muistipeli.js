// Funktio, joka sekoittaa pakan.
function shuffle(taulukko)
{
    taulukko.sort(function(a, b){return 0.5 - Math.random()});
    return taulukko;
}
// Funktio, joka laitetaan jokaisen kortin onclick-toiminnoksi
function nayta(numero)
{
  // haetaan klikattuu kortti
  var tunnus = document.getElementById('solu'+numero);
  // haetaan klikatun kortin alt-muuttuja
  var altti = tunnus.getAttribute('alt');
  // tarkistetaan, onko kortteja klikattu aikasemmin.
  if(vanha != -1)
  {
    // jos on, haetaan vanhan kortin alt-muuttuja
    valtti = vanha.getAttribute('alt');
  }
  else{
    // muuten pistetään siihen -1
    valtti = vanha;
  }

  // pistetään klikatun taustan tilalle valitun kortin kuva.
  tunnus.innerHTML = '<img src="kuvatähän/'+altti+'">';
  // katsotaan onko aikaisempi ja nykyinen kortti samoja.
  if(altti == valtti){
    // mikäli ovat, haetaan nykyisen kortin alt-muuttuja.
    var altti = tunnus.getAttribute('alt');
    // näytetään vanhakortti
    vanha.innerHTML = '<img src="kuvatähän/'+altti+'">';
    // näytetään uusi kortti
    tunnus.innerHTML = '<img src="kuvatähän/'+altti+'">';
  }
  else{
    // muussa tapauksessa tehdään nykyisestä kortista vanha.
    vanha = tunnus;
    // pysäytetään ohjelma hetkeksi.
    odota(tunnus);
  }
}
