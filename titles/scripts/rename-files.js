import fs from 'fs/promises'

const PATH = './titles/files'

const filenames = await fs.readdir(PATH)

for (const filename_old of filenames) {  
  
  if(!filename_old.includes('.epub')) {
    continue
  }

  const filename_new = filename_old
    .toLowerCase()
    .replaceAll(' - ', '-')
    .replaceAll(' ', '-')

  await fs.rename(`${PATH}/${filename_old}`, `${PATH}/${filename_new}`)
}
