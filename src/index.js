var jQuery = require("jquery");
jQuery(function(){
	jQuery(".hello-btn").click(function(){
		alert("你好");
		return false;
	});	
});