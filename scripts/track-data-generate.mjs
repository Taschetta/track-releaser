import fs from 'fs/promises'

const FILES_PATH = '../tracks/'
const DATA_PATH = '../data/tracks.json'

const files = await fs.readdir(FILES_PATH)

const tracks = []

for (const file of files) {

  const id = tracks.length + 1

  const [year, month, day] = file.slice(0, 10).split('-')

  const created_at = (new Date(year, month -1, day)).valueOf()
  const released_at = null
  
  const track = {
    id,
    file,
    created_at,
    released_at,
  }

  tracks.push(track)
}

await fs.writeFile(
  DATA_PATH,
  JSON.stringify(tracks, null, '  ')
)
