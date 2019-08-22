const path = require('path')
const Jimp = require('jimp-compact')

async function resize ({ input, distDir, sizes }) {
  const inputFile = await Jimp.read(input)

  await Promise.all(sizes.map(size => {
    const distFile = path.join(distDir, `${size}.png`)
    return new Promise(resolve => {
      inputFile.clone().contain(size, size).write(distFile, () => resolve())
    })
  }))
}

resize(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
