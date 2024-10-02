let selectCategory = undefined, selectCity = undefined, keywords = undefined;
let categortList = []
window.addEventListener('load', function () {
    fetch('http://localhost:3000/categories')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => {
            categortList = data
            const categoryBox = document.querySelector('#categoryBox')
            const cityBox = this.document.querySelector('#cityBox')
            let inner = ''
            data.forEach(item => {
                inner += `
                    <input class="day-btn" id="` + item.CATEGORY_ID + `" type="checkbox" />
                    <label class="day-label" for="` + item.CATEGORY_ID + `">` + item.NAME + `</label>
                `
            });
            categoryBox.innerHTML = inner
            const searchBtn = document.getElementById('searchBtn');
            const clearBtn = document.getElementById('clearBtn');
            const categoryboxs = categoryBox.querySelectorAll('input[type="checkbox"]');
            const cityboxs = cityBox.querySelectorAll('input[type="checkbox"]');
            searchBtn.addEventListener('click', function () {
                const selectedCategories = Array.from(categoryboxs)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.nextElementSibling.textContent);
                if (selectedCategories.length > 0) {
                    categortList.forEach(item => {
                        if (item.NAME === selectedCategories[0]) {
                            selectCategory = item.CATEGORY_ID
                        }
                    })
                }
                const selectedCities = Array.from(cityboxs)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.nextElementSibling.textContent);
                if (selectedCities.length > 0) {
                    selectCity = selectedCities[0]
                }
                let inputValue = document.getElementById('input').value;
                if (inputValue) {
                    keywords = inputValue
                }
                if (selectCategory == undefined && selectCity == undefined && keywords == undefined) {
                    alert('must select at least one criteria')
                } else {
                    getDataList(selectCategory, selectCity, keywords)
                }
            });
            clearBtn.addEventListener('click', function () {
                categoryboxs.forEach(checkbox => {
                    checkbox.checked = false;
                    checkbox.nextElementSibling.style.removeProperty('background-color');
                    checkbox.nextElementSibling.style.removeProperty('background-image');
                    checkbox.nextElementSibling.style.removeProperty('border');
                });
                cityboxs.forEach(checkbox => {
                    checkbox.checked = false;
                    checkbox.nextElementSibling.style.removeProperty('background-color');
                    checkbox.nextElementSibling.style.removeProperty('background-image');
                    checkbox.nextElementSibling.style.removeProperty('border');
                });
                document.getElementById('input').value = ''
                selectCategory = undefined
                selectCity = undefined
                keywords = undefined
                getDataList()
            });
        })
        .catch(error => {
            console.error('获取数据失败:', error);
        });
});

function search(category, city, keyword) {
    getDataList(category, city, keyword)
}