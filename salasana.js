function tarkista(form)
{
var salasana = form.salasana.value;
if(salasana.length < 14)
{
  alert("Anna vähintään 14 kirjaiminen salasana!");
}
else {
  alert("Kiitos!");
}

}
