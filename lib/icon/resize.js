const path = require('path')
const Jimp = require('jimp-compact')
const { normalizeSize, sizeName } = require('../utils')

async function resize ({ input, distDir, sizes }) {
  const inputFile = await Jimp.read(input)

  // Icons
  await Promise.all(sizes.map(normalizeSize).map((size) => {
    const name = sizeName(size)
    const distFile = path.join(distDir, `${name}.png`)
    return new Promise((resolve) => {
      inputFile.clone().contain(size[0], size[1]).write(distFile, () => resolve())
    })
  }))
}

resize(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error) // eslint-disable-line no-console
  process.exit(1)
})
