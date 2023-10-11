import { createSectionFilmsContainer } from "./sectioFilmsContainer.js"
import { createSectionNameContainer } from "./sectionNameContainer.js"

export function createStructureSectionWithFilms(section, filmsArray) {
    const newSectionWithFilms = document.createElement("div")
    newSectionWithFilms.classList.add("background-stripe")

    const sectionContainer = createSectionNameContainer(section);
    const filmContainer = createSectionFilmsContainer(section, filmsArray)
    
    newSectionWithFilms.append(sectionContainer, filmContainer)
    return newSectionWithFilms
}

