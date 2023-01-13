let main = document.querySelector(".allItems")


const items = async () => {
    fetch('http://localhost:8000/')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(data=>{
                    //create the needed elements
                const div = document.createElement("div")
                const divPic = document.createElement("div")
                const divName = document.createElement("div")
                const divStars = document.createElement("div")
                const divPrice = document.createElement("div")
                const divKind = document.createElement("div")

                const img = document.createElement("img")
                
                // set the atrribute of created elements
                div.setAttribute("class","items")
                divPic.setAttribute("class","pic")
                divName.setAttribute("class","name")
                divStars.setAttribute("class","stars")
                divPrice.setAttribute("class","price")
                divKind.setAttribute("class","kind")
                

                // apend the created elements
                main.append(div)
                div.append(divPic)
                div.append(divName)
                div.append(divStars)
                div.append(divKind)
                div.append(divPrice)

                divPic.append(img)

                
                // fetch the data into variabels
                const price = data.price;
                const name = data.title;
                const kind = data.category
                const stars = data.rating
                const pic = data.image
                
                
                // append the star due their rating into elements
                for(let i = 0; i < Math.round(stars);i++){
                    const spanStar = document.createElement("span")
                    divStars.append(spanStar)
                    spanStar.setAttribute("class","fa fa-star starsIcon")
                }
                // append the data into created elements
                divName.append(name)
                divPrice.append(price)
                divPrice.append(" $")
                divKind.append(kind)
                divStars.append(" "+stars)
                divStars.append(" Rate")
                img.setAttribute("src", pic);
        })
    })
}

items()

