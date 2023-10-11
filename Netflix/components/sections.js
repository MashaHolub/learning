import { createStructureSectionWithFilms } from './structureSectionWithFilms.js';

export function createSections() {
    const sectionsArray = []
    const newSectionsObject = {}
    const filmsArray = []

    fetch('http://localhost:8080/movies', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
        data.movies.forEach((object) => {
            if (!newSectionsObject[object.section]) {
                sectionsArray.push(object.section)
                newSectionsObject[object.section]=[]
            }
            newSectionsObject[object.section].push(object)
        })
    
        console.log(sectionsArray)
        console.log(newSectionsObject)
        
        const fullPage = document.getElementById("all_films_on_page")

        sectionsArray.forEach((name)=>{
            fullPage.append(createStructureSectionWithFilms(name, newSectionsObject[name]))
        })
    })
    
}