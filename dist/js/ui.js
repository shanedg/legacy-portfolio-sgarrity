console.log('js');

window.addEventListener('load', function() {
  let details = document.querySelectorAll('.work .skills');
  details.forEach(function(element) {
    element.style.maxHeight = '0px';
  });

  let toggles = document.querySelectorAll('.fa-plus');
  toggles.forEach(function(element) {
    element.addEventListener('click', function(t) {

      console.log(t.target.parentElement.nextSibling.nextSibling);

      if (t.target.parentElement.nextSibling.nextSibling.style.maxHeight === '0px') {
        t.target.parentElement.nextSibling.nextSibling.style.maxHeight = '999px';
        t.target.className = 'fa fa-minus';
      } else {
        t.target.parentElement.nextSibling.nextSibling.style.maxHeight = '0px';
        t.target.className = 'fa fa-plus';
      }

    });

  });

  let first = document.querySelector('.fa-plus');
  first.className = 'fa fa-minus';
  first.parentElement.nextSibling.nextSibling.style.maxHeight = '999px';


});
