import { createItemImage } from "./itemImage.js"

export function createFilmItem(filmItem) {
    const newFilmItem = document.createElement("a")
    newFilmItem.classList.add("film_item")
    newFilmItem.append(createItemImage(filmItem.imgLink, filmItem.imgAlt))
    
    const hoveredItem = document.createElement("div")
    hoveredItem.classList.add("item_hover")
    const watchNowElement = document.createElement("span")
    watchNowElement.textContent = "Watch now"
    hoveredItem.appendChild(watchNowElement)

    newFilmItem.append(hoveredItem)

    return newFilmItem
}
