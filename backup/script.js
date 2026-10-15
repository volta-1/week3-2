const portfolio = document.getElementById("portfolio");

// 项目数据
const projects = [
    {
        title: "Register Form",
        tag: "Register",
        url: "https://week1-ten-alpha.vercel.app/",
        image: "images/week1.png"
    },
    {
        title: "Quiz Time",
        tag: "Quiz",
        url: "https://week2-psi.vercel.app/",
        image: "images/week2.png"
    },
    {
        title: "Recipe Finder",
        tag: "Recipe",
        url: "https://week2-2.vercel.app/",
        image: "images/week2-2.png"
    }
];

// 页面加载时渲染项目卡片
document.addEventListener("DOMContentLoaded", displayProjects);

function displayProjects() {
    portfolio.innerHTML = "";

    projects.forEach((project) => {
        portfolio.innerHTML += `
        <a href="${project.url}" target="_blank" class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <h2>${project.title}</h2>
            <div class="project-tag">${project.tag}</div>
        </a>
        `;
    });
}