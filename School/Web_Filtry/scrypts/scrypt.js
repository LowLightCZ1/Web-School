// Definování proměných


let filterInput = document.getElementById("cityFilterInput")
let selectFilter = document.getElementById("citySelectFilter")
let Select = document.getElementById("citySelect")

let table = document.getElementById("cityTable")

let originalOption = Array.from(Select.options) 

// Funkce pro filtrování v tabulce
function filterTable() {
    let input = filterInput
    let filter = input.value.toLowerCase()
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr")

    Array.from(rows).forEach(rows => {
        let cityCell = rows.getElementsByTagName("td")[1]
        if(cityCell){
            let cityName = cityCell.textContent || cityCell.innerText
            rows.style.display = cityName.toLowerCase().includes(filter) ? '' : 'none'
        }
    })
}


function filterSelect(){
    input = selectFilter
    let filter = input.value.toLowerCase()
    Select.innerText = ''

    let filteredOptions = originalOption.filter(option =>
        option.text.toLowerCase().includes(filter)
    );

    let optionsToShow = filter ? filteredOptions : originalOption;

    optionsToShow.forEach(option => {
        citySelect.appendChild(option);
    });
}

function submitForm(event) {
    event.preventDefault();
    let selectedCity = citySelect.value;
    console.log(selectedCity);
}


