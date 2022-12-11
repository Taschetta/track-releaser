import fs from 'fs'

const path = `./titles/files`
const title_count= 7

let text_titles

text_titles = fs.readdirSync(path)
text_titles = text_titles.filter(text => text.includes('.txt'))

function get_random_text() {
  const index = Math.ceil(Math.random() * text_titles.length - 1)
  const title = text_titles[index]
  const text = fs.readFileSync(`${path}/${title}`, { encoding: 'utf-8' })
  return text
}

// function random_char(value = '') {
//   return value[Math.ceil(Math.random() * value.length - 1)]
// }

// function chance(one_in_x) {
//   return Math.ceil(Math.random() * one_in_x) === one_in_x
// }

// function to_glyph(char) {
//   const glyph_alphabet = {
//     ' ': '~!@#$%^&*()-_+={}][|\\\`,./?;:\'<>',
//     'a': 'ÁáÀàÂâǍǎĂăÃãẢảȦȧẠạÄäÅåḀḁĀāĄąᶏȺⱥȀȁẤấẦầẪẫẨẩẬậẮắẰằẴẵẲẳẶặǺǻǠǡǞǟȀȁȂȃⱭɑᴀⱯɐɒÆæᴁᴭᵆǼǽǢǣᴂ',
//     'b': 'ḂḃḄḅḆḇɃƀƁɓƂƃᵬᶀʙｂȸ',
//     'c': 'ĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕ',
//     'd': 'ĎďḊḋḐḑḌḍḒḓḎḏĐđÐðD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅÞþȸDZDzdzǱǲǳDŽDždžǄǅǆ',
//     'e': 'ÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇƏəƎǝƐɛｅᴂᴔÆæᴁᴭᵆǼǽǢǣŒœᵫ',
//     'f': 'ḞḟƑƒᵮᶂꜰﬀﬃﬄﬁﬂ',
//     'g': 'ǴǵĞğĜĝǦǧĠġĢģḠḡǤǥƓɠᶃɢȜȝŊŋ',
//     'h': 'ĤĥȞȟḦḧḢḣḨḩḤḥḪḫH̱ẖĦħⱧⱨɦ',
//     'i': 'ÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨᵻᶖİiIƖﬁIJijĲĳ',
//     'j': 'ĴĵɈɉJ̌ǰȷʝɟʄᴊIJijĲĳLJLjljǇǈǉNJNjnjǊǋǌʲ',
//     'k': 'ḰḱǨǩĶķḲḳḴḵƘƙⱩⱪᶄᶄꝀꝁᴋＫｋ',
//     'l': 'ĹĺĽľĻļḶḷḸḹḼḽḺḻŁłĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟﬂLJLjljǇǈǉ',
//     'm': 'ḾḿṀṁṂṃᵯᶆⱮɱᴍ',
//     'n': 'ŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴ',
//     'o': 'ÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộƟɵƆɔȢȣⱺᴏｏŒœᴔ',
//     'p': 'ṔṕṖṗⱣᵽƤƥP̃p̃ᵱᶈᴘǷƿȹ',
//     'q': 'ɊɋƢƣʠ',
//     'r': 'ŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟɌɍⱤɽꝚꝛᵲᶉɼɾᵳʀ',
//     's': 'ẞßŚśṤṥŜŝŠšṦṧṠṡẛŞşṢṣṨṩȘșS̩s̩ᵴᶊʂȿƩʃ',
//     't': 'ŤťṪṫŢţṬṭȚțṰṱṮṯŦŧȾⱦƬƭƮʈT̈ẗᵵƫȶᶙᴛ',
//     'u': 'ÚúÙùŬŭÛûǓǔŮůÜüǗǘǛǜǙǚǕǖŰűŨũṸṹŲųŪūṺṻỦủȔȕȖȗƯưỨứỪừỮữỬửỰựỤụṲṳṶṷṴṵɄʉƱʊȢȣᵾᶙᴜᵫ',
//     'v': 'ṼṽṾṿƲʋᶌᶌⱱⱴᴠɅʌ',
//     'w': 'ẂẃẀẁŴŵẄẅẆẇẈẉW̊ẘⱲⱳ',
//     'x': 'ẌẍẊẋᶍ',
//     'y': 'ÝýỲỳŶŷẙŸÿỸỹẎẏȲȳỶỷỴỵɎɏƳƴʏ',
//     'z': 'ŹźẐẑŽžŻżẒẓẔẕƵƶȤȥⱫⱬᵶᶎʐʑɀʒƸƹDZDzdzǱǲǳDŽDždžǄǅǆ',
//     'á': 'ÁáÀàÂâǍǎĂăÃãẢảȦȧẠạÄäÅåḀḁĀāĄąᶏȺⱥȀȁẤấẦầẪẫẨẩẬậẮắẰằẴẵẲẳẶặǺǻǠǡǞǟȀȁȂȃⱭɑᴀⱯɐɒÆæᴁᴭᵆǼǽǢǣᴂ',
//     'é': 'ÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇƏəƎǝƐɛᴂᴔÆæᴁᴭᵆǼǽǢǣŒœᵫ',
//     'í': 'ÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨᵻᶖİiIƖﬁIJijĲĳ',
//     'ó': 'ÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộƟɵƆɔȢȣⱺᴏŒœᴔ',
//     'ñ': 'ŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴŊŋNJNjnjǊǋǌ',
//     'ú': 'ÚúÙùŬŭÛûǓǔŮůÜüǗǘǛǜǙǚǕǖŰűŨũṸṹŲųŪūṺṻỦủȔȕȖȗƯưỨứỪừỮữỬửỰựỤụṲṳṶṷṴṵɄʉƱʊȢȣᵾᶙᴜᵫ',
//   }

//   const glyphs = glyph_alphabet[char]
//   const glyph = random_char(glyphs) || char

//   return  glyph
//   // return glyphs[Math.ceil(Math.random() * glyphs.length - 1)]
// }

function generate_title_v1(text, length = 50) {  
  const index_start = Math.ceil(Math.random() * text.length - length - 1)
  
  let title = ''

  title = text.slice(
    index_start,
    index_start + length,
  )

  title = title.trim()
  title = title.split(' ')
  title.pop()
  title.shift()
  title = title.join(' ')

  return title
}

function generate_title_v2(text, length = 20) {  
  const index_start = Math.ceil(Math.random() * text.length - length - 1)
  
  let title = ''

  title = text.slice(
    index_start,
    index_start + length,
  )

  title = title.split('')
  title = title.join(' ')

  return title
}

function get_random_title_v3(text, length = 25) {  
  const index_start = Math.ceil(Math.random() * text.length - length - 1)
  
  let title = ''

  title = text
    .slice(index_start, index_start + length)
    .split('')
    .join('-')
    .replaceAll(' ', '/')
    .replaceAll('-', '_')


  return title
}

function get_random_titles(text, count = 7, length = 25) {
  let titles = []

  let index = Math.ceil(Math.random() * (text.length - (length * count) - 1))
  
  for (let i = 0; i < count; i++) {
    let title = ''
  
    title = text
      .slice(index, index + length)
      .split('')
      .join('-')
      .replaceAll(' ', '/')
      .replaceAll('-', '_')
  
    titles.push(title)
    index += length
  }

  return titles  
}


// const text = get_random_text()
// const titles = get_random_titles(text)

for (let i = 0; i < title_count; i++) {
  const text = get_random_text()
  const title = get_random_title_v3(text)
  console.log(title)
}
