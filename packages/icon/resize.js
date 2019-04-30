const path = require('path')
const Jimp = require('jimp')

async function resize ({ input, distDir, sizes }) {
  const inputFile = await Jimp.read(input)

  const result = {}

  for (const size of sizes) {
    const distFile = path.join(distDir, `${size}.png`)
    result[size] = distFile

    await inputFile
      .clone()
      .contain(size, size)
      .write(distFile)
  }

  return result
}

resize(JSON.parse(process.argv[2])).then(result => {
  process.send(result)
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
