// Github URL
// "https://api.github.com/users/ElzeroWebSchool/repos"

const table = document.querySelector(".result table tbody");

function createRow(input) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = input.name;
    let td2 = document.createElement("td");
    td2.innerHTML = `<a href=${input.html_url} target="_blank">visit</a>`;
    let td3 = document.createElement("td");
    td3.textContent = input.stargazers_count;
    tr.append(td1, td3, td2);
    table.append(tr);
}

const getData = async () => {
    const res = await fetch(
        "https://api.github.com/users/ElzeroWebSchool/repos"
    );

    let data = await res.json();
    for (let repo of data) createRow(repo);
};

getData();
