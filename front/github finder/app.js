// 자바스크립트의 전반적인 부분, 만들어 둔 class 사용하는 part

const github = new Github;
const ui = new UI;

const searchInput = document.getElementById('searchUser');
const searchButton = document.getElementById('searchButton');

// spinner 기능 추가
const loadingSprinner = document.getElementById('loadingSpinner');

// 엔터 키를 눌렀을 때 이벤트 처리
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// 검색 버튼 클릭 시 이벤트 처리
searchButton.addEventListener('click', performSearch);

// 검색 수행 함수
function performSearch() {
    const userText = searchInput.value;
    showLoadingSpinner();
    if (userText) {
        github.getUser(userText).then((data) => {
            if (data.profile.message === 'Not Found') {
                alert('유저가 없습니다.');
            } else {

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

            hideLoadingSpinner();
        });
    } else {
        hideLoadingSpinner();
    }
}

function showLoadingSpinner() {
    loadingSprinner.style.display = 'block';
}

function hideLoadingSpinner() {
    loadingSprinner.style.display = 'none';
}