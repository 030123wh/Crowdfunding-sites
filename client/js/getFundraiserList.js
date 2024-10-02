window.onload = function() {
    getDataList()
}

function getDataList(category, city, keyword) {
    fetch(`http://localhost:3000/search?category=${category}&city=${city}&keyword=${keyword}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => {
            const cardOuter = document.querySelector('#card-outer')
            let inner = ''
            if (data.length) {
                data.forEach(item => {
                    inner += `
                <div class="card">
                        <div class="card__border"></div>
                        <div class="card_title__container">
                            <p class="card_paragraph">` + item.CAPTION + `</p>
                            <span class="card_title">` + item.ORGANIZER + `</span>
                        </div>
                        <ul class="card__list">
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">TargetFunding: $` + item.TARGET_FUNDING + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">CurrentFunding: $` + item.CURRENT_FUNDING + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">City: ` + item.CITY + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Status: ` + (item.ACTIVE == 1 ? 'ACTIVE' : 'SUSPENDED') + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Category: ` + item.CATEGORY_NAME + `</span>
                            </li>
                        </ul>
                        <a href="./details.html?id=` + item.FUNDRAISER_ID + `"><button class="donate-button">Donate</button></a>
                    </div>
                `
                })
            } else {
                inner = `<div class="none">NO RESULT</div>`
            }
            cardOuter.innerHTML = inner
        })
}