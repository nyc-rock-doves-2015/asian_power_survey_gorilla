
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    // event.target.style.display = "none";
    // alert("Copied text to clipboard: " + event.data["text/plain"] );
    console.log($(event.target).attr("data-original-title", "Copied!"));
    $copyBtn = $(event.target);
    $copyBtn.tooltip('hide');
    $copyBtn.attr('data-original-title', "Copied!");
    $copyBtn.tooltip('fixTitle');
    $copyBtn.tooltip('show');
  } );
});