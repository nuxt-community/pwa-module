const path = require('path')
const Jimp = require('jimp')

async function resize ({ input, distDir, sizes }) {
  const inputFile = await Jimp.read(input)

  for (const size of sizes) {
    const distFile = path.join(distDir, `${size}.png`)
    await inputFile
      .clone()
      .contain(size, size)
      .write(distFile)
  }
}

resize(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
