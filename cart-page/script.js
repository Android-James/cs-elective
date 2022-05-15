var removeCartItemButtons = document.getElementsByClassName('remove-btn')
console.log(removeCartItemButtons)
for (var i=0; i<removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    var carItemContainer = document.getElementsByClassName('pro-container')[0]
    var cartRows = carItemContainer.getElementsByClassName('pro')
    for (var i=0; i<cartRows; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
    }
}