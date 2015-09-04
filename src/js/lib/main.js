// !- entry point

$(() => {
  console.log('entry-point');
  // require("./../../build/lib/components/searchVideo.js");
  $('#search-video').keypress((e) => {
  	if (e.which == 13) {
      console.log($('#search-video').val());
      require('../../build/lib/fetchVideo')($('#search-video').val());
  		return false;
  	}
  });
});
