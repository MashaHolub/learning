import { createMainMenuItem } from "./components/mainMenuItem.js"
import {createSections} from './components/sections.js';

const createdMenuItems = []
const mainMenuContainer = document.getElementById("main_menu_items")

fetch('http://localhost:8080/menu', { method: 'GET' })
.then((res) => res.json())
.then((data) => {
    data.menu.forEach((object) =>{
        const menuItem = createMainMenuItem(object)
        createdMenuItems.push(menuItem)
    })
    mainMenuContainer.prepend(...createdMenuItems)
})

function clearHomePage() {
    document.getElementById("all_films_on_page").innerHTML = "";
}


    const input = document.getElementById("input_search");

    input.addEventListener("input", (event) => {
        const inputValue = event.target.value
        console.log(inputValue)
        
        fetch(`http://localhost:8080/search?name=${inputValue}`, { method: 'POST'})
            
            .then((res) => res.json())
            
            .then(() => {
            if (inputValue!=="") {
                clearHomePage()

                // data.forEach(function(object){
                // const filmItem = createFilmItem(object)
                // createdFilmsArray.push(filmItem)
                // })
                // sectionContainer1.prepend(...createdFilmsArray)
                
            } else {
                clearHomePage()
                createSections()
            }
            })
    });
    

createSections()
