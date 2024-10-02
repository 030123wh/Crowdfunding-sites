window.onload = function() {
    var url = location.search;
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("=");
        const id = strs[1]
        fetch(`http://localhost:3000/fundraiser/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应错误');
                }
                return response.json();
            })
            .then(data => {
                const content = document.querySelector('#info-content')
                content.innerHTML = `
                    <div class="top">
                    <div class="photo">
                        <img src="` + data.URL + `" alt="">
                    </div>
                    <div class="info">
                        <div class="card">
                        <div class="card__border"></div>
                        <div class="card_title__container">
                            <p class="card_paragraph">` + data.CAPTION + `</p>
                            <span class="card_title">` + data.ORGANIZER + `</span>
                        </div>
                        <ul class="card__list">
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">TargetFunding: $` + data.TARGET_FUNDING + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">CurrentFunding: $` + data.CURRENT_FUNDING + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">City: ` + data.CITY + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Status: ` + (data.ACTIVE == 1 ? 'ACTIVE' : 'SUSPENDED') + `</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg viewBox="0 0 16 16" fill="currentColor" class="check_svg">
                                        <path fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Category: ` + data.CATEGORY_NAME + `</span>
                            </li>
                        </ul>
                        <button class="donate-button" onclick="alert('This feature is under contruction')">Donate</button>
                    </div>
                    </div>
                </div>
                <div class="bottom">` + data.DESCRIBE + `</div>
                `
            })
    }
}