window.onload = function() {
    fetch('http://localhost:3000/fundraisers')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => {
            const result = data.slice(0, 3)
            const hotContent = document.querySelector('#hotContent')
            let inner = ''
            result.forEach(item => {
                inner += `
                <div class="trainer-grid-text" onclick="window.location.href='./details.html?id=` + item.FUNDRAISER_ID + `'">
                        <div class="ch-item">
                            <img src="` + item.URL + `" alt="">
                            <div class="ch-info">
                                <h3>` + item.ORGANIZER + `</h3>
                            </div>
                        </div>
                        <h4>` + item.CAPTION + `</h4>
                        <div class="goal">
                            <div class="current" style="width: 88%;"></div>
                        </div>
                        <div class="num">
                            <span class="current-num">$` + item.CURRENT_FUNDING + `</span>
                            <span class="goal-num">$` + item.TARGET_FUNDING + `</span>
                        </div>
                        <p>City: ` + item.CITY + `</p>
                        <p>Status: ` + (item.ACTIVE == 1 ? 'ACTIVE' : 'SUSPENDED') + `</p>
                        <p>Category: ` + item.CATEGORY_NAME + `</p>
                    </div>
                `
            });
            hotContent.innerHTML = inner
        })
}