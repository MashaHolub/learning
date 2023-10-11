export function createSectionName(sectionName) {
    const exploreMoreExtention = document.createElement("a")
    exploreMoreExtention.classList.add("explore_all")
    exploreMoreExtention.textContent = "Explore All"

    const triangleElement = document.createElement("img")
    triangleElement.setAttribute("src", "./img/Polygon 2.svg")
    triangleElement.setAttribute("alt", "small triangle")

    exploreMoreExtention.append(triangleElement)

    const newSectionName = document.createElement("div")
    newSectionName.classList.add("section_name")
    const spanName = document.createElement("span")
    spanName.textContent = sectionName
    newSectionName.append(spanName, exploreMoreExtention)

    return newSectionName
}