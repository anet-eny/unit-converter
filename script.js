let inputValue = ""

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("button clicked")
    inputValue = document.getElementById("input-el").value
    console.log(inputValue)
})

