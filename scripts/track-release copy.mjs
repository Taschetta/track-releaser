import fs from 'fs/promises'

const tracks = await fs.readdir('../tracks')

const random_track_index = Math.ceil(Math.random() * tracks.length - 1)

const [track_name, ext] = tracks[random_track_index].split('.')

const release_date = (new Date(Date.now()))
  .toISOString()
  .split('T')
  [0]

await fs.mkdir(
  `../releases/${release_date} - ${track_name}`, 
  { recursive: true }
)

await fs.copyFile(
  `../tracks/${track_name}.${ext}`, 
  `../releases/${release_date} - ${track_name}/track.${ext}`,
)