// get data to backend
fetch("http://localhost:8000/",{
    method:"GET"
})
.then(data => data.json())
.then((data)=>{
    console.log("my name is "+data.name)
    const datas = JSON.stringify(data)
    console.log(datas)
})

// get data from backend