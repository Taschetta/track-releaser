import fs from 'fs/promises'

const REMOVE = 'RECORTAR - '
const BASE = './revisar'

const files = await fs.readdir(BASE)

for (const file of files) {
  
  if(!file.includes(REMOVE)) {
    console.log(`salteando ${file}`)
    continue
  }

  const path_old = `${BASE}/${file}`
  const path_new = `${BASE}/${file.replace(REMOVE, '')}`
  
  console.log(`reescribiendo ${file}`)

  await fs.rename(path_old, path_new)
}