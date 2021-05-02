const SongsManager = function() {
    const songsFile = {

    }
    const addSong = function(songName, Url) {
        songsFile[songName] = Url
    }
    const listOfSongs = function() {
        console.log(songsFile)
    }
    const getSong = function(songName) {
        console.log(songsFile[songName])
    }
    return {
        addSong: addSong,
        getSong: getSong
    }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ