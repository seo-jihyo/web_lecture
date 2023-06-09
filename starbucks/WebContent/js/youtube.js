/**youtube.js**/


// Youtube Iframe API를 비동기로 로드한다.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	new YT.Player('player', {
		videoId: 'c7Tg5uNTmfg',  
		//유튜브상에 있는 실행 유튜브의 id 값을 영상으로 띄운다.
		playerVars: {
			autoplay: true,
			loop: true,
			playlist: 'c7Tg5uNTmfg'
		},
		
	//	height: '360',
	//	width: '640',
		events: {
			onReady: function(event){
				event.target.mute() //음소거
			}
	//		'onReady': onPlayerReady,
	//		'onStateChange': onPlayerStateChange
		}
	});
}

