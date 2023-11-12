const input = document.querySelector(".inputBox");
const addButton = document.querySelector(".addButton");
const ul = document.querySelector(".listConteiner");
const allDelete = document.querySelector('.del-All-btn')

    addButton.addEventListener('click', (event) => {
    if(input.value === "") {
        alert("Напиши чё-нить")
    }
    else {
        const now = new Date()
        const time = document.createElement('div')
        time.append(now.toLocaleString())
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'custom-checkbox';
        const newLi = document.createElement("li");
        newLi.innerHTML = input.value;
        const deleteBtnWrap = document.createElement('div')
        const deleteBtn = document.createElement('button')
        deleteBtnWrap.classList.add('delete-btn')
        deleteBtn.classList.add('del')
        deleteBtnWrap.appendChild(deleteBtn)
        newLi.appendChild(deleteBtn)
        newLi.appendChild(checkbox);
        ul.append(newLi);
        deleteBtn.addEventListener('click', function(e){
            newLi.remove()
            
        })
        newLi.appendChild(time)
    }
    input.value = '';
    // save()
    })



    function deleteItem (e) {
        console.log(e.currentTarget)
    }



    allDelete.addEventListener('click', (e) => {
        
        const list = ul.querySelectorAll('li')
        console.log(list)
        if (!!list.length) {
            list.forEach(item => {
                item.remove()
            })
        }
    } )

    // function save() {
    //     localStorage.setItem('data', ul.innerHTML);
    // }

    // function show() {
    //     ul.innerHTML = localStorage.getItem('data');
    // }
    // show()