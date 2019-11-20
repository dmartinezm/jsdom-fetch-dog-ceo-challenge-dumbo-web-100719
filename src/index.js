// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  
    fetchImgs()
    fetchBreeds()

});


function fetchImgs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl, {})
    .then(r => r.json())
    .then(getImages)
    
}

let getImages = (returnImage) => {
    let imgUL = document.createElement("ul")
    let imgDiv = document.querySelector("#dog-image-container")
    
    returnImage.message.forEach((indivImg) => {
        let imgLi = document.createElement('li')
        let dogImg = document.createElement('img')

        dogImg.src = indivImg
        imgLi.append(dogImg)
        imgUL.append(imgLi)
        imgDiv.append(imgUL)
    })

}

function breedDDL(){
    let opt = document.querySelector('#breed-dropdown')
    opt.addEventListener('change',() => {
        removeBreeds()
        fetchBreeds()
        return opt.value
    })
    return opt.value
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl, {})
    .then(r => r.json())
    .then(loadBreeds)

}

let loadBreeds = (returnBreed) => {
        let breedSelected = breedDDL()
        let breedUl = document.querySelector("#dog-breeds")
        
        Object.keys(returnBreed.message).forEach((breed) => {
            let breedLi = document.createElement('li')
            let breedChar = breed.charAt(0)
           
            if(breedChar === breedSelected){
                breedLi.innerText = breed
                breedLi.addEventListener('click', () => {
                    breedLi.style.color = 'red'
                })
                breedUl.append(breedLi)
               
            }
        })
}

function removeBreeds(){
    let breedLi = document.querySelectorAll("#dog-breeds li")
        breedLi.forEach((singleBreed) => {
            singleBreed.remove()
        })
}


