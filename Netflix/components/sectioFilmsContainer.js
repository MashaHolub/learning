import {createFilmItem} from "./filmItem.js"

export function createSectionFilmsContainer(sectionName, filmsArray) {
    const filmContainer = document.createElement("div")
    filmContainer.classList.add("section_container")
    filmContainer.setAttribute("id",`filmsInSection${sectionName.replaceAll(' ', '')}`)

    const filmsElementsArray = []
    filmsArray.forEach((object)=>{
        const filmItem = createFilmItem(object)
        filmsElementsArray.push(filmItem)
    })
    filmContainer.append(...filmsElementsArray)
    return filmContainer
}