import fs from 'fs/promises'

const path = './titles/files'

const folders = await fs.readdir(path)

for (const folder of folders) {

  if(folder.includes('.')) {
    continue
  }

  console.log(`normalizing ${folder}`)
  
  const files = await fs.readdir(`${path}/${folder}`)
  
  let text = ''

  for (const file of files) {
    text += await fs.readFile(`${path}/${folder}/${file}`, { encoding: 'utf-8' })
  }

  text = text
    .match(/<body[^>]*>[^]*<\/body>/gm, '')[0]  // take only the body tag
    .replaceAll('\r\n', ' ')                    // inline everything
    .replaceAll(/\<[^>]+>/gm, '')               // remove html tags
    .replaceAll(/[^a-záéíóúñ\s]/gm, '')          // keep only words
    .replaceAll(/\s{2,}/gm, ' ')                // normalize spaces
    .toLowerCase()
    .trim()
  
  await fs.writeFile(`${path}/${folder}.txt`, text, { encoding: 'utf-8' })
}