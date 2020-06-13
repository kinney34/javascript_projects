var $ = function(id) {
  return document.getElementById(id);
}

$('tipSlider').addEventListener('change', calculateTip);

function calculateTip() {
  let tipInput = $('tipSlider').value;
  let billInput = $('billInput').value;
  let tip = tipInput * billInput * .01;
  $('slider-right').innerHTML = tipInput + '%';
  $('tip-amt').value = '$' + tip;
  $('total').value = '$' + (Number(billInput) + Number(tip));
}
