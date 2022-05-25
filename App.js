let btn = document.getElementById('submit_button')
btn.addEventListener('click', () => {
    let form_input = document.getElementById('name_input').value

    // create UL
    let content_div = document.createElement('content')
    content_div.style.display = 'block'
    let itemUl = document.getElementById('itemUl')
    itemUl.append(content_div)

    // create LI
    let itemLi = document.createElement('li')
    itemLi.style.paddingTop = '10px'
    itemLi.style.display = 'inline-block'
    content_div.appendChild(itemLi)

    // Edit Button create
    let editBtn = document.getElementById('editBtn')
    let edit_button = document.createElement('BUTTON')
    edit_button.className = 'btn btn-primary'
    edit_button.innerHTML = 'Edit'
    edit_button.style.marginLeft = '20px'
    itemLi.innerHTML = editBtn
    content_div.appendChild(edit_button)

    // Edit button action
    edit_button.addEventListener('click', () => {
        let change_name = prompt('Change your subject name: ')
        itemLi.innerHTML = 'Subject: ' + change_name
    })

    // Delete Button Create
    let delBtn = document.createElement('BUTTON')
    delBtn.style.marginLeft = '20px'
    delBtn.innerHTML = 'Delete'
    delBtn.className = 'btn btn-danger'
    content_div.appendChild(delBtn)

    // Delete Button Action
    delBtn.addEventListener('click', () => {
        content_div.remove()
    })


    itemLi.innerHTML = "Subject: " + form_input



    console.log(itemUl)


})


