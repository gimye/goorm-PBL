// 깃허브에서 데이터 가져오는 부분
// class를 인스턴스 객체로 만들 때 가장 먼저 실행되는 부분이 constructor 부분

class Github {
    constructor() {
        this.client_id = '3155bf415a1dc0bad599';
        this.client_secret = 'e26fceaa949c4580f8935469082b6eb6a14323d4'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        console.log(profileResponse);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        console.log(repoResponse);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    };
}
