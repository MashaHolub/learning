import { createSectionName } from "./sectionName.js";

export function createSectionNameContainer(sectionName) {
    const sectionContainer = document.createElement("div")
    sectionContainer.classList.add("section")
    sectionContainer.classList.add("container")
    
    const sectionNameElement = createSectionName(sectionName);
    sectionContainer.append(sectionNameElement)

    sectionContainer.setAttribute("id",`section${sectionName.replaceAll(' ', '')}`)

    return sectionContainer;
}