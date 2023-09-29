
ElementInternals.array.forEach((element => my0bserver(element)) {
entries.forEach( (entry) => {
    if(entry.Intersecting){
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }
})
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => my0bserver.observe(element))
