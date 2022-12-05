import fs from 'fs/promises'

const TRACKS_PATH = '../data/tracks.json'

// get unreleased tracks data

let tracks

tracks = JSON.parse(await fs.readFile(TRACKS_PATH))
tracks = tracks.filter(tracks => tracks.released_at === null)

// select random track

let track
let track_index

track_index = Math.ceil(Math.random() * tracks.length)

track = tracks[track_index]


