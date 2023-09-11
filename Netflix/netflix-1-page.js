
const filmsArray = [
    {
        name: "Borsch",
        imgLink: "./img/image 3.png",
        imgAlt: "Borsch",
        section: "Popular on Netflix",
        position: 3
    },
    {
        name: "Cabinet of Curiosities",
        imgLink: "./img/image 6.png",
        imgAlt: "Cabinet of Curiosities",
        section: "Popular on Netflix",
        position: 5
    },
    {
        name: "Spider-Man",
        imgLink: "./img/image 1.png",
        imgAlt: "Spider-Man",
        section: "Popular on Netflix",
        position: 1
    },
    {
        name: "The Witcher",
        imgLink: "./img/image 2.png",
        imgAlt: "The Witcher",
        section: "Popular on Netflix",
        position: 2
    },
    {
        name: "Black Mirror",
        imgLink: "./img/image 5.png",
        imgAlt: "Black Mirror",
        section: "Popular on Netflix",
        position: 4
    },
    {
        name: "The Big Short",
        imgLink: "./img/image 4.png",
        imgAlt: "The Big Short",
        section: "Tranding now",
        position: 1
    },
    {
        name: "Brooklyn nine-nine",
        imgLink: "./img/image 7.png",
        imgAlt: "Brooklyn nine-nine",
        section: "Tranding now",
        position: 2
    },
    {
        name: "Howl's Moving Castle",
        imgLink: "./img/image 16.png",
        imgAlt: "Howl's Moving Castle",
        section: "Tranding now",
        position: 3
    },
    {
        name: "Luxemburg-Luxemburg",
        imgLink: "./img/image 17.png",
        imgAlt: "Luxemburg-Luxemburg",
        section: "Tranding now",
        position: 4
    },
    {
        name: "Arcane",
        imgLink: "./img/image 11.png",
        imgAlt: "Arcane",
        section: "Tranding now",
        position: 5
    },
    {
        name: "Dark",
        imgLink: "./img/image 9.png",
        imgAlt: "Dark",
        section: "Casual Viewing",
        position: 1
    },
    {
        name: "Breaking Bad",
        imgLink: "./img/image 8.png",
        imgAlt: "Breaking Bad",
        section: "Casual Viewing",
        position: 2
    },
    {
        name: "Shrek",
        imgLink: "./img/image 15.png",
        imgAlt: "Shrek",
        section: "Casual Viewing",
        position: 3
    }, 
    {
        name: "Stranger Things",
        imgLink: "./img/image 10.png",
        imgAlt: "Stranger Things",
        section: "Casual Viewing",
        position: 4
    }, 
    {
        name: "Cunk on Earth",
        imgLink: "./img/image 13.png",
        imgAlt: "Cunk on Earth",
        section: "Casual Viewing",
        position: 5
    }
]

const menuItemsArray = ["Home", "TV Shows", "Movies", "New & Popular","My List"]
const sectionsArray = ["Popular on Netflix", "Tranding now", "Casual viewing"]

const mainMenuContainer = document.getElementById("main_menu_items")

const sectionName1 = document.getElementById("sectionPopularOnNetflix")
const sectionName2 = document.getElementById("sectionTrandingNow")
const sectionName3 = document.getElementById("sectionCasualViewing")


const sectionContainer1 = document.getElementById("filmsPopularOnNetflix")
const sectionContainer2 = document.getElementById("filmsTrandingNow")
const sectionContainer3 = document.getElementById("filmsCasualViewing")

function createMainMenuItem(menuItem) {
    const menuName = document.createElement("a")
    menuName.textContent = menuItem
    menuName.classList.add("pseudo_link")
    const newMenuItem = document.createElement("div")
    newMenuItem.append(menuName)
    newMenuItem.classList.add("menu_item")
    return newMenuItem
}

function createSectionName(sectionName){
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

function createItemImage(src, alt) {
    const newImage = document.createElement("img")
    newImage.setAttribute("src", src)
    newImage.setAttribute("alt", alt)
    return newImage
}

function createFilmItem(filmItem) {
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

const createdFilmsArray = [[],[],[]]

filmsArray.forEach(function(object){
    // switch case
    if (object.section === "Popular on Netflix") {
        const filmItem = createFilmItem(object)
        createdFilmsArray[0].push(filmItem)
    }  
    else if (object.section === "Tranding now") {
        const filmItem = createFilmItem(object)
        createdFilmsArray[1].push(filmItem)
    }  
    else if (object.section === "Casual Viewing") {
        const filmItem = createFilmItem(object)
        createdFilmsArray[2].push(filmItem)
    }  
})

sectionContainer1.prepend(...createdFilmsArray[0])
sectionContainer2.prepend(...createdFilmsArray[1])
sectionContainer3.prepend(...createdFilmsArray[2])

const createdMenuItems = []

menuItemsArray.forEach(function(object){
    const menuItem = createMainMenuItem(object)
    createdMenuItems.push(menuItem)
})

mainMenuContainer.prepend(...createdMenuItems)

const createdSectionsArray = []

sectionsArray.forEach(function(object){
    const sectionName = createSectionName(object)
    createdSectionsArray.push(sectionName)
})

sectionName1.prepend(createdSectionsArray[0])
sectionName2.prepend(createdSectionsArray[1])
sectionName3.prepend(createdSectionsArray[2])






//sectionConteiner.append(createFilmItem(filmsArray[1]))
//console.log(createFilmItem(filmsArray[1]))

