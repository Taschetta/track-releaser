import extract from "extract-zip"
import fs from 'fs/promises'

const PATH = 'D:/cuentas/santiago/sonido/0 - Throwaway 19-99/titles/files'

const files = await fs.readdir(PATH)

for (const file of files) {
  
  if(!file.includes('.epub')) {
    continue
  }

  let folder = file.replace('.epub', '')

  folder = folder.replace(' - ', '-')
  folder = folder.replace(' ', '-')
  folder = folder.toLowerCase()
    
  if(files.includes(folder)) {
    console.log(`skipping ${folder}`)
    continue
  }
  
  console.log(`extracting ${folder}`)
  
  await fs.mkdir(`${PATH}/${folder}`)  
  await extract(`${PATH}/${file}`, { dir: `${PATH}/${folder}` })

  // copiar archivos de /OEBPS/Text a /D:/temp
  
  const part_files = await fs.readdir(`${PATH}/${folder}/OEBPS/Text`)

  for (const part_file of part_files) {
    await fs.copyFile(
      `${PATH}/${folder}/OEBPS/Text/${part_file}`,
      `D:/temp/${part_file}`
    )
  }

  // eliminar carpetas innecesarias

  await fs.rm(`${PATH}/${folder}`, { recursive: true })
  await fs.mkdir(`${PATH}/${folder}`)

  // traer archivos de temp a /

  for (const part_file of part_files) {
    await fs.copyFile(
      `D:/temp/${part_file}`,
      `${PATH}/${folder}/${part_file}`
    )
  }
}
