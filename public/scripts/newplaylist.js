const path = "https://wedj.herokuapp.com/"
const setQuery = "&type=video&part=snippet&key=AIzaSyCMWuzTs2X2BxnT4PJ7_23YmEHBoLPhTus"
var playlistData = [] 
    function newPlay() {
        searchSong(); 
        addSong(); 
    $('.save').click((e) => {
        e.preventDefault()
       console.log('save button clicked')
       $.post(`${path}playlist`, {
           name: $('.playlist').val() 
       })
       .then(function(data){
           console.log(data)
       })    
       // save search info in a variable then post 
       // loop post until all songs are posted 
       for(var i =0; i < playlistData.length; i++){
           console.log(playlistData[i])
           $.post(`${path}song`, {
           name: playlistData[i]["title"], 
            album_img: playlistData[i]["image"],
            url: playlistData[i][]
       })
       .then(function(data){
           console.log(data)
       })
       }
    })
}
// send a post to playlist|  and maybe send a post to the playlistsong join 
// btn same class for cancel and save button 
//$('#playlist').val() = newplaylist name 

// make new new play a function that gets passed the value of the playlist name 

function addSong(songData){
    $('.addsong').click((e) => {
           console.log("addSong clicked")
           console.log(songData)
           // push song data to an array 
           playlistData.push(songData)
       })
}

function searchSong(){
    $('.search').click((e) => {
        console.log('search button clicked'); 
        let searchItem = $('.myInput').val()
        console.log(searchItem)
        const url = "https://www.googleapis.com/youtube/v3/search?q="
        const setQuery = "&type=video&part=snippet&key=AIzaSyCMWuzTs2X2BxnT4PJ7_23YmEHBoLPhTus"
        $.get(`${url}${searchItem}${setQuery}`)
    .then(results => {
      const videoResult = results.items[0]
      const video = {
        id: videoResult.id.videoId,
        title: videoResult.snippet.title,
        image: videoResult.snippet.thumbnails.medium.url
      } 
      addSong(video)
    })
    
  })
}
// post to songs 
       // doees song already exist in database 
       // if not send git request to youtube 

$(function() {
    console.log("document.ready working")
    newPlay(); 
})