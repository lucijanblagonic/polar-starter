$(document).ready(function(){

  /*
   * Skip links
   *
   * More information: http://blog.bignerdranch.com/4455-web-accessibility-skip-navigation-links/
   */

  // bind a click event to the 'skip' link
  $(".skip-links a").click(function(){

    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo="#"+this.href.split('#')[1];

    // Setting 'tabindex' to -1 takes an element out of normal
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

      // when focus leaves this element,
      // remove the tabindex attribute
      $(this).removeAttr('tabindex');

    }).focus(); // focus on the content container
  });

});