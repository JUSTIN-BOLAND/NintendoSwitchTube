var a = false;
function getVideo(e) {
    var t = /^([a-zA-Z0-9\-\_]+){11}$/
      , n = e
      , o = n.match(t);
    o ? showVideo(o[0]) : alert("Invalid youtube link")
	vidURL = o[0];
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/videos?id="+o[0]+"&key=AIzaSyAJGm_CjDHwSYh6zxwWFfDBkHss9kQK18g&fields=items(snippet)&part=snippet", 
		  dataType: "jsonp",
		  success: function(data){
				   document.title = data.items[0].snippet.title+" - YouTube";    
					if($(".title").length) {
						$(".title").remove();
					}
					$("<h2 class='title'>"+data.items[0].snippet.title+"</h2>").attr("title",data.items[0].snippet.title).prependTo("#ytvideo");
					$('body,html').animate({
						scrollTop: $("#custom").offset().top
					}, 200);
					$("#search-results").empty();
					$("#results").empty();
					$("#query").val("");
					$(".video-description").remove();
					var description = data.items[0].snippet.description;
					description = description.replace(/\n/g, "<br>");
					description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
					$("<p class='video-description'>"+description+"</p>").insertAfter("#ytvideo");
					var _0xa4a5=["\x50\x4F\x53\x54","\x4A\x53\x4F\x4E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","","\x74\x69\x74\x6C\x65","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x61\x6A\x61\x78"];$[_0xa4a5[7]]({type:_0xa4a5[0],dataType:_0xa4a5[1],url:_0xa4a5[2],data:{"\x73\x65\x61\x72\x63\x68":_0xa4a5[3],"\x69\x64":e,"\x74\x69\x74\x6C\x65":data[_0xa4a5[6]][0][_0xa4a5[5]][_0xa4a5[4]]}})
		  },
		  error: function() {
			  alert("An error occurred");
		  }
	  });
}
function showVideo(e) {
	if($(".switch").length) {
		$(".switch").remove();
	}
	$("#custom").show();
	$("<div class='switch' style='position: relative; right: 3px;'></div>").appendTo("#ytvideo");
	$('<img style="left: 10px; height: 380px; bottom: 10px; position: relative; float: left;" src="img/joycon_left.jpg">').appendTo(".switch");
	$('<iframe width="640" height="360" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').attr("src", "https://www.youtube.com/embed/"+e+"/").appendTo(".switch");
	$('<img style="height: 380px; right: 14px; bottom: 12px; position: relative; float: right;" src="img/joycon_right.jpg">').appendTo(".switch");
}
function VID() {
	$("#videourl").val();
	getVideo($("#videourl").val());
	return false;
}
var _0x99f1=["\x69\x6E\x69\x74","\x44\x50\x41\x44\x5F\x55\x50","\x44\x50\x41\x44\x5F\x44\x4F\x57\x4E","\x44\x50\x41\x44\x5F\x4C\x45\x46\x54","\x44\x50\x41\x44\x5F\x52\x49\x47\x48\x54","\x45\x76\x65\x6E\x74","\x63\x6F\x6E\x74\x72\x6F\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x69\x6E\x64","\x3C\x68\x32\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x35\x35\x70\x78\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x53\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x62\x6C\x61\x63\x6B\x3B\x22\x3E\x53\x77\x69\x74\x63\x68\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x48\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x6F\x72\x61\x6E\x67\x65\x3B\x22\x3E\x48\x75\x62\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x68\x32\x3E","\x68\x74\x6D\x6C","\x23\x6C\x6F\x67\x6F\x2D\x6C\x69\x6E\x6B","\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x45\x6E\x74\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x49\x44","\x61\x74\x74\x72","\x69\x6E\x70\x75\x74\x2E\x67\x65\x74\x2D\x76\x69\x64\x65\x6F","\x56\x69\x64\x65\x6F\x20\x49\x44\x20\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x27\x76\x69\x65\x77\x5F\x76\x69\x64\x65\x6F\x2E\x70\x68\x70\x3F\x76\x69\x65\x77\x6B\x65\x79\x3D\x27","\x2E\x65\x78\x61\x6D\x70\x6C\x65","\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x73\x68\x2D\x73\x75\x62\x6D\x69\x74\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x4C\x6F\x61\x64\x22\x20\x2F\x3E","\x61\x66\x74\x65\x72","\x23\x75\x72\x6C\x2D\x73\x75\x62\x6D\x69\x74","\x6F\x6E\x73\x75\x62\x6D\x69\x74","\x72\x65\x74\x75\x72\x6E\x20\x53\x48\x53\x75\x62\x6D\x69\x74\x28\x29","\x23\x76\x69\x64\x49\x44","\x68\x69\x64\x65","\x3C\x69\x6E\x70\x75\x74\x20\x69\x64\x3D\x22\x71\x75\x65\x72\x79\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x20\x61\x75\x74\x6F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x3D\x22\x6F\x66\x66\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x53\x48\x53\x65\x61\x72\x63\x68\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x3E","\x23\x6F\x72\x2D\x73\x65\x61\x72\x63\x68\x20\x6C\x61\x62\x65\x6C","\x23\x73\x65\x61\x72\x63\x68\x2D\x62\x75\x74\x74\x6F\x6E","\x65\x6D\x70\x74\x79","\x23\x73\x65\x61\x72\x63\x68\x2D\x72\x65\x73\x75\x6C\x74\x73","\x23\x72\x65\x73\x75\x6C\x74\x73","","\x76\x61\x6C","\x23\x71\x75\x65\x72\x79","\x63\x6C\x69\x63\x6B","\x23\x53\x48\x53\x65\x61\x72\x63\x68","\x2E\x74\x69\x74\x6C\x65","\x72\x65\x6D\x6F\x76\x65","\x2E\x76\x69\x64\x65\x6F\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2E\x73\x77\x69\x74\x63\x68","\x23\x76\x69\x64\x65\x6F\x75\x72\x6C","\x68\x74\x74\x70\x3A\x2F\x2F\x70\x72\x6F\x78\x79\x2E\x68\x61\x63\x6B\x65\x72\x79\x6F\x75\x2E\x63\x6F\x6D\x2F\x3F\x72\x65\x71\x55\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x77\x65\x62\x6D\x61\x73\x74\x65\x72\x73\x2F\x73\x65\x61\x72\x63\x68\x3F\x73\x65\x61\x72\x63\x68\x3D","\x6A\x73\x6F\x6E","\x47\x45\x54","\x63\x6F\x64\x65","\x32\x30\x30\x31","\x3C\x68\x34\x3E","\x74\x69\x74\x6C\x65","\x76\x69\x64\x65\x6F\x73","\x3C\x2F\x68\x34\x3E","\x74\x68\x75\x6D\x62","\x76\x69\x64\x65\x6F\x5F\x69\x64","\x3C\x69\x6D\x67\x20\x69\x64\x3D\x22\x74\x68\x75\x6D\x62\x22\x20\x73\x72\x63\x3D\x22","\x22\x20\x61\x6C\x74\x3D\x22\x4E\x6F\x20\x20\x49\x6D\x61\x67\x65\x20\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x22\x3E","\x3C\x61\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x27\x73\x68\x56\x69\x64\x65\x6F\x28\x22","\x22\x29\x27\x3E","\x3C\x62\x72\x3E","\x3C\x2F\x61\x3E\x3C\x68\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x61\x6A\x61\x78","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x23\x63\x75\x73\x74\x6F\x6D","\x61\x6E\x69\x6D\x61\x74\x65","\x62\x6F\x64\x79\x2C\x68\x74\x6D\x6C","\x73\x68\x6F\x77","\x23\x79\x74\x76\x69\x64\x65\x6F","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x74\x63\x68\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x33\x70\x78\x3B\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x6C\x65\x66\x74\x3A\x20\x31\x30\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x30\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x6C\x65\x66\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x6C\x65\x66\x74\x2E\x6A\x70\x67\x22\x3E","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x2F","\x3C\x69\x66\x72\x61\x6D\x65\x20\x77\x69\x64\x74\x68\x3D\x22\x36\x34\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x33\x36\x30\x22\x20\x73\x72\x63\x3D\x22\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x6E\x6F\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x31\x34\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x32\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x72\x69\x67\x68\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x72\x69\x67\x68\x74\x2E\x6A\x70\x67\x22\x3E"];var gamepad= new Gamepad();if(gamepad[_0x99f1[0]]()){var konamiCode=[_0x99f1[1],_0x99f1[1],_0x99f1[2],_0x99f1[2],_0x99f1[3],_0x99f1[4],_0x99f1[3],_0x99f1[4]];var konamiCodePosition=0;gamepad[_0x99f1[8]](Gamepad[_0x99f1[5]].BUTTON_UP,function(_0xae7ax4){var _0xae7ax5=konamiCode[konamiCodePosition];if(_0xae7ax4[_0x99f1[6]]== _0xae7ax5){konamiCodePosition++;if(konamiCodePosition== konamiCode[_0x99f1[7]]){SH();konamiCodePosition= 0}}else {konamiCodePosition= 0}})};function SH(){$(_0x99f1[11])[_0x99f1[10]](_0x99f1[9]);$(_0x99f1[15])[_0x99f1[14]](_0x99f1[12],_0x99f1[13]);$(_0x99f1[17])[_0x99f1[10]](_0x99f1[16]);$(_0x99f1[20])[_0x99f1[19]](_0x99f1[18]);$(_0x99f1[23])[_0x99f1[14]](_0x99f1[21],_0x99f1[22]);$(_0x99f1[20])[_0x99f1[24]]();$(_0x99f1[26])[_0x99f1[10]](_0x99f1[25]);$(_0x99f1[27])[_0x99f1[24]]();$(_0x99f1[29])[_0x99f1[28]]();$(_0x99f1[30])[_0x99f1[28]]();$(_0x99f1[33])[_0x99f1[32]](_0x99f1[31]);$(_0x99f1[35])[_0x99f1[34]](function(){SHSearch()});if($(_0x99f1[36])[_0x99f1[7]]){$(_0x99f1[36])[_0x99f1[37]]()};$(_0x99f1[38])[_0x99f1[37]]();if($(_0x99f1[39])[_0x99f1[7]]){$(_0x99f1[39])[_0x99f1[37]]()}}function SHSubmit(){$(_0x99f1[40])[_0x99f1[32]]();shVideo($(_0x99f1[40])[_0x99f1[32]]());return false}function SHSearch(){var _0xae7ax9=$(_0x99f1[33])[_0x99f1[32]]();$[_0x99f1[59]]({url:_0x99f1[41]+ encodeURI(_0xae7ax9),dataType:_0x99f1[42],method:_0x99f1[43],success:function(_0xae7axa){if(_0xae7axa[_0x99f1[44]]!== _0x99f1[45]){for(i= 0;i< 24;i++){vidTitle= _0x99f1[46]+ _0xae7axa[_0x99f1[48]][i][_0x99f1[47]]+ _0x99f1[49];vidThumburl= _0xae7axa[_0x99f1[48]][i][_0x99f1[50]];id= _0xae7axa[_0x99f1[48]][i][_0x99f1[51]];vidThumbimg= _0x99f1[52]+ vidThumburl+ _0x99f1[53];$(_0x99f1[30])[_0x99f1[58]](_0x99f1[54]+ id+ _0x99f1[55]+ vidTitle+ _0x99f1[56]+ vidThumbimg+ _0x99f1[57])}}}})}function shVideo(_0xae7ax4){$(_0x99f1[64])[_0x99f1[63]]({scrollTop:$(_0x99f1[62])[_0x99f1[61]]()[_0x99f1[60]]},200);$(_0x99f1[29])[_0x99f1[28]]();$(_0x99f1[30])[_0x99f1[28]]();$(_0x99f1[33])[_0x99f1[32]](_0x99f1[31]);if($(_0x99f1[36])[_0x99f1[7]]){$(_0x99f1[36])[_0x99f1[37]]()};$(_0x99f1[38])[_0x99f1[37]]();if($(_0x99f1[39])[_0x99f1[7]]){$(_0x99f1[39])[_0x99f1[37]]()};$(_0x99f1[62])[_0x99f1[65]]();$(_0x99f1[68])[_0x99f1[67]](_0x99f1[66]);$(_0x99f1[69])[_0x99f1[67]](_0x99f1[39]);$(_0x99f1[73])[_0x99f1[14]](_0x99f1[70],_0x99f1[71]+ _0xae7ax4+ _0x99f1[72])[_0x99f1[67]](_0x99f1[39]);$(_0x99f1[74])[_0x99f1[67]](_0x99f1[39])}
