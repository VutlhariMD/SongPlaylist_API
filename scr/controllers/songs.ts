import type {Song} from "../types/songs.ts"


let songs: Song[] = []

let currentId = 1

//Retrieve all our songs

export const getSongs =(): Song[] => {
    return songs;
}

export const getSongById = (id: number) : Song | undefined => {
    const song =songs.find((song) => song.id ===id)
    return song;
}

export const addSong =(title: string, artist : string, duration : number)=>{
    const newSong: Song = {id: currentId++, title,artist,duration}
    songs.push(newSong)
    return newSong
}
