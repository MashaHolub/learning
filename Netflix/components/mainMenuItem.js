export function createMainMenuItem(menuItem) {
    const menuName = document.createElement("a")
    menuName.textContent = menuItem
    menuName.classList.add("pseudo_link")
    const newMenuItem = document.createElement("div")
    newMenuItem.append(menuName)
    newMenuItem.classList.add("menu_item")
    return newMenuItem
}
