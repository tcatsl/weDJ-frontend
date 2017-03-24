var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var onYouTubeIframeAPIReady
var playerReady = new Promise((resolve, reject) => {

  onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
     //  events: {
     //    'onReady': resolve,
     //    'onStateChange': onPlayerStateChange
     //  }
    });
    resolve(player)
  }
})

$().ready(() => {

 const urlArr = window.location.href.split('=')
 const pId = urlArr[1]
 const url = "https://wedj.herokuapp.com"
 const YTurl = "https://www.youtube.com/embed/"

 function changeSong(url) {
   $('#player').attr('src', `${YTurl}url`)
 }

 function addSongs(song) {
     $('.songinfo').append(
      `<tr>
         <td class="songname">
          ${song.name}
<<<<<<< HEAD
          <button class="change-song" value="${song.URL}">Next</button>
=======
          <button class="btn waves-effect waves-light change-song right" value="${song.URL}">Play</button>
>>>>>>> 8b676c466e467c94cc69e31e43a849b58b3cf6a9
         </td>
         <td>
           <button class="btn waves-effect waves-light"><i class="material-icons">thumb_up</i></button>
         </td>
         <td>
           <button class="btn waves-effect waves-light"><i class="material-icons">thumb_down</i></button>
         </td>
       </tr>`
     )
 }
<<<<<<< HEAD

 $(document).on('click', '.change-song', (e) => {
   $('#player').attr('src', `${YTurl}${e.target.value}`)
 });
=======
$(document).on('click', '.change-song', (e) => {
  $('#player').attr('src', `${YTurl}${e.target.value}`)
})
>>>>>>> 8b676c466e467c94cc69e31e43a849b58b3cf6a9

  $.get(`${url}/playlist_song/playlist/${pId}`)
    .then(songs => {
      var firstSong = null
      songs.forEach(song => {
        $.get(`${url}/song/${song.s_id}`)
          .then(song => {
            addSongs(song)
            if (firstSong == null) {
              firstSong = song.URL
              $('#player').attr('src', `${YTurl}${firstSong}`)
            } else {
              playerReady.then((player) => {
                console.log("Hello");
                player.cueVideoById({videoId: `${song.URL}`})
              })
            }
          })
      })
    })
})
