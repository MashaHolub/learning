
const createdProfiles = document.getElementById("profiles")

function createProfileName(name) {
    const newProfileName = document.createElement("div")
    newProfileName.textContent = name
    newProfileName.classList.add("profile_name")
    return newProfileName
}

function createImg(src, id, alt) {
    const newImage = document.createElement("img")
    newImage.setAttribute("src", src)
    newImage.setAttribute("id", id)
    newImage.setAttribute("alt", alt)
    return newImage
}

function createProfileItem(profileImage, profileName) {
    const newProfileItem = document.createElement("a")
    newProfileItem.classList.add("profile_item") 
    newProfileItem.setAttribute("href", "./index2.html")
    const profilCoveredImage = document.createElement("div")
    profilCoveredImage.setAttribute("class", "profile_img")
    profilCoveredImage.append(profileImage)
    newProfileItem.append(profilCoveredImage, profileName)
    return newProfileItem
}

const profilesArray = [
    {
        name: "Vlad",
        imgLink: "./img/Vlad.png",
        imgId: "profile_Vlad",
        imgAlt: "profile_photo"
    },
    {
        name: "Masha",
        imgLink: "./img/Masha.png",
        imgId: "profile_Masha",
        imgAlt: "profile_photo"
    },
    {
        name: "Add Profile",
        imgLink: "./img/+.svg",
        imgId: "add_Profile",
        imgAlt: "profile_photo"
    }

]

const createdProfilesArray = []

profilesArray.forEach(function(object) {
    const profileName = createProfileName(object.name)
    const imgProfile = createImg(object.imgLink, object.imgId, object.imgAlt)
    const profile = createProfileItem(imgProfile, profileName)
    if (object.name === "Add Profile") {
        profile.classList.add("add_Profile")
    } 
    createdProfilesArray.push(profile) 
})

createdProfiles.prepend(...createdProfilesArray) 
// append - heavy action, so better to make it one time (not inside the loop)
// prepend – insert object at the beginning of the element 


