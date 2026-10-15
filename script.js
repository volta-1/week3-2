/**
 * xywang Portfolio — Card Renderer
 */
(function () {
  "use strict";

  const PROJECTS = [
    {
      id: 1,
      title: "Quiz Time",
      desc: "互动问答应用，练习题目切换，得分统计与结果反馈等前端逻辑。",
      tag: "Quiz",
      url: "https://week2-psi.vercel.app/",
      thumb: "images/week2.png",
    },
    {
      id: 2,
      title: "Register Form",
      desc: "表单校验练习页，涵盖输入校验、错误提示与提交状态处理。",
      tag: "Register",
      url: "https://week1-ten-alpha.vercel.app/",
      thumb: "images/week1.png",
    },
    {
      id: 3,
      title: "Recipe Finder",
      desc: "食谱搜索应用，基于API拉取菜谱数据并展示详情与配料列表。",
      tag: "Recipe",
      url: "https://week2-2.vercel.app/",
      thumb: "images/week2-2.png",
    },
  ];

  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const frag = document.createDocumentFragment();

  PROJECTS.forEach((p) => {
    const a = document.createElement("a");
    a.href = p.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "project-card";
    a.setAttribute("role", "listitem");
    a.setAttribute("aria-label", p.title);

    a.innerHTML = `
      <div class="project-card__thumb">
        <img src="${p.thumb}" alt="${p.title} 预览" loading="lazy" decoding="async"
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23121c1a%22 width=%22400%22 height=%22200%22/%3E%3C/svg%3E'">
        <div class="project-card__arrow">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="project-card__body">
        <div class="project-card__header">
          <span class="project-card__num" aria-hidden="true">${p.id}</span>
          <h3 class="project-card__title">${p.title}</h3>
        </div>
        <p class="project-card__desc">${p.desc}</p>
        <span class="project-card__tag">${p.tag}</span>
      </div>
    `;

    frag.appendChild(a);
  });

  grid.appendChild(frag);
})();