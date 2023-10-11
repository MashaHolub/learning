
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

const createdProfilesArray = []

// append - heavy action, so better to make it one time (not inside the loop)
// prepend – insert object at the beginning of the element 

fetch('http://localhost:8080/profiles', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
        
        data.profiles.forEach((object) => {
            const profileName = createProfileName(object.name)
            const imgProfile = createImg(object.imgLink, object.imgId, object.imgAlt)
            const profile = createProfileItem(imgProfile, profileName)
            if (object.name === "Add Profile") {
                profile.classList.add("add_Profile")
            } 
            createdProfilesArray.push(profile) 
        })
        createdProfiles.prepend(...createdProfilesArray)
    })

    

