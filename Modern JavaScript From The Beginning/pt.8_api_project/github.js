class Github {
  constructor() {
    this.client_id = 'ccbf0b396190ac791edd';
    this.client_secret = '05b32ef0c78ac153bec0f029731d71e3703710c1';
    this.repos_count = 5;
    this.repos_count_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?pre_page="$(this.repos_count}&sort=${this.repos_count_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const reposData = await repoResponse.json();

    // return profile object
    return {
      profile: profileData,
      repos: reposData
    }
  }
}