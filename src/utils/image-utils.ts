const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href
}

// const viteImport = async (folder: string, path: string) => {
//   // TODO: Get the URL from promise
//   try {
//     const { default: image } = await import(`../assets/${folder}/${path}.png`)
//     return
//   } catch (error) {
//     console.error('Error loading image:', error)
//     console.error(error)
//   }
// }

// export { getImageUrl, viteImport }
export { getImageUrl }
