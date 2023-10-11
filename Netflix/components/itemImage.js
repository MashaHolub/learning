export function createItemImage(src, alt) {
    const newImage = document.createElement("img")
    newImage.setAttribute("src", src)
    newImage.setAttribute("alt", alt)
    return newImage
}