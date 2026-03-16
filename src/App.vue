<template>
  <div class="page">
    <header class="nav">
      <div class="logo">{{ profile.brand }}</div>
      <nav class="nav-links">
        <a href="#about">关于我</a>
        <a href="#skills">技能</a>
        <a href="#experience">经历</a>
        <a href="#projects">项目</a>
        <a href="#contact">联系我</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-left">
          <p class="tag">你好，我是</p>
          <h1 class="title">{{ profile.name }}</h1>
          <p class="subtitle">{{ profile.title }}</p>
          <p class="description">
            {{ profile.summary }}
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn primary">查看项目</a>
            <a href="#contact" class="btn ghost">联系我</a>
          </div>
        </div>
        <div class="hero-right">
          <div class="avatar-wrapper">
            <div class="avatar-circle">
              <img v-if="avatarUrl" class="avatar-img" :src="avatarUrl" alt="avatar" />
              <span v-else>{{ profile.avatarFallback }}</span>
            </div>
            <div class="floating-card">
              <span class="dot online"></span>
              {{ profile.status }}
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <h2 class="section-title">关于我</h2>
        <p class="section-subtitle">{{ profile.about }}</p>
        <div class="info-row">
          <div class="info-pill" v-for="item in profile.highlights" :key="item">{{ item }}</div>
        </div>
      </section>

      <section id="skills" class="section">
        <h2 class="section-title">技能栈</h2>
        <div class="cards-grid">
          <div class="card" v-for="group in skills" :key="group.title">
            <h3>{{ group.title }}</h3>
            <p>{{ group.items }}</p>
          </div>
        </div>
      </section>

      <section id="experience" class="section">
        <h2 class="section-title">实习经历</h2>
        <div class="cards-grid">
          <article class="card project-card" v-for="exp in experiences" :key="exp.company + exp.role">
            <div class="exp-head">
              <h3>{{ exp.company }}</h3>
              <span class="exp-time">{{ exp.time }}</span>
            </div>
            <p class="exp-role">{{ exp.role }}</p>
            <ul class="bullets">
              <li v-for="(b, i) in exp.bullets" :key="i">{{ b }}</li>
            </ul>
            <div class="project-meta">
              <span v-for="(r, i) in exp.results" :key="i">{{ r }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">个人项目</h2>
        <div class="cards-grid">
          <article class="card project-card" v-for="proj in projects" :key="proj.name">
            <div class="exp-head">
              <h3>{{ proj.name }}</h3>
              <span class="exp-time">{{ proj.time }}</span>
            </div>
            <p>{{ proj.desc }}</p>
            <h4 class="mini-title">主要功能</h4>
            <ul class="bullets">
              <li v-for="(b, i) in proj.features" :key="i">{{ b }}</li>
            </ul>
            <h4 class="mini-title">技术实现</h4>
            <ul class="bullets">
              <li v-for="(b, i) in proj.tech" :key="i">{{ b }}</li>
            </ul>
            <h4 class="mini-title">项目亮点</h4>
            <ul class="bullets">
              <li v-for="(b, i) in proj.highlights" :key="i">{{ b }}</li>
            </ul>
            <div class="project-meta">
              <span v-for="(t, i) in proj.tags" :key="i">{{ t }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">
          如果你对我感兴趣，欢迎通过下面的方式联系。
        </p>
        <div class="contact-list">
          <div class="contact-item">
            <span class="label">邮箱</span>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </div>
          <div class="contact-item">
            <span class="label">手机</span>
            <span>{{ profile.phone }}</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>© {{ year }} {{ profile.name }}. All rights reserved.</span>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()

// 把你的证件照放到：src/assets/avatar.jpg
// 然后取消下面这行注释即可显示头像：
import avatarUrl from './assets/avatar.jpg'

const profile = {
  brand: 'MySpace',
  name: '邝贤昕',
  avatarFallback: 'GX',
  title: '前端开发 · Vue / 小程序',
  summary: '专注于构建简洁、美观、易用的 Web 页面与小程序，喜欢把想法快速落地成可用的产品。',
  status: '正在寻找前端岗位机会',
  about:
    '江西理工大学（本科）· 计算机科学与技术。熟悉前端三件套与小程序开发流程，关注 UI/UX 与交互细节，愿意持续学习并提升工程化能力。',
  highlights: ['本科 · 计算机科学与技术', '熟悉 Vue / 小程序', '关注 UI/UX 体验'],
  email: '2764905233@qq.com',
  phone: '13129004653',
  github: 'https://github.com/yourname',
  githubText: 'github.com/yourname'
}

const skills = [
  { title: '前端基础', items: 'HTML / CSS / JavaScript（基础算法）' },
  { title: '小程序与服务', items: '微信小程序（WXML/WXSS/JavaScript）/ 小程序云服务（了解）' },
  { title: '框架与工具', items: 'Vue（了解）/ Git / Cursor / Claude Code 等 AI 工具' },
  { title: 'UI/UX', items: '响应式布局 / 动画效果 / 交互优化 / 用户体验提升' }
]

const experiences = [
  {
    company: '咸鱼网络科技有限公司',
    role: '市场调研与销售实习生',
    time: '2024.11 - 2025.12',
    bullets: [
      '研究相机市场行情，在平台筛选具有收藏/流通价值的相机产品',
      '负责竞品采购、质量评估、定价策略制定与销售执行',
      '在闲鱼平台包装运营个人店铺：产品上架、客户咨询、订单处理与售后服务',
      '通过数据分析优化选品策略，提升销售效率与客户满意度'
    ],
    results: ['累计 2200+ 粉丝', '完成 1050 单交易', '好评率 99%']
  }
]

const projects = [
  {
    name: '恋爱日志小程序',
    time: '2025.08 - 2025.11',
    desc: '基于微信小程序开发的恋爱日志应用，支持记录瞬间、上传图片、多设备同步等功能。',
    features: [
      '日志记录：支持文字/图片/表情，按时间轴展示',
      '数据同步：实时监听 + 多端同步，支持多设备协作',
      '数据管理：备份、恢复、导出，支持版本管理',
      '用户交互：评论、点赞、登录验证'
    ],
    tech: [
      '前端：微信小程序（WXML / WXSS / JavaScript）',
      '后端：微信云开发（云数据库 / 云存储 / 云函数）',
      '核心：实时数据监听、网络状态管理、图片缓存优化、同步策略'
    ],
    highlights: ['多设备数据实时同步，减少数据一致性问题', '图片加载优化与缓存机制', '数据备份/恢复机制，提升数据安全性'],
    tags: ['微信小程序', '云开发', '实时同步']
  }
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #0f172a;
  background:
    radial-gradient(circle at 10% 0, rgba(251, 113, 133, 0.16), transparent 55%),
    radial-gradient(circle at 95% 10%, rgba(59, 130, 246, 0.14), transparent 55%),
    #fafafa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 7vw;
  backdrop-filter: blur(16px);
  background: rgba(250, 250, 250, 0.72);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.logo {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 14px;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 14px;
}

.nav-links a {
  color: rgba(15, 23, 42, 0.65);
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: rgba(15, 23, 42, 0.92);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 40px;
  padding: 64px 7vw 40px;
  align-items: center;
}

.hero-left {
  max-width: 540px;
}

.tag {
  font-size: 14px;
  color: rgba(236, 72, 153, 0.9);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.title {
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.subtitle {
  margin-top: 8px;
  color: rgba(15, 23, 42, 0.65);
  font-size: 16px;
}

.description {
  margin-top: 16px;
  color: rgba(15, 23, 42, 0.65);
  line-height: 1.7;
  font-size: 15px;
}

.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn.primary {
  background: linear-gradient(135deg, #fb7185, #f97316);
  color: white;
  box-shadow: 0 14px 30px rgba(251, 113, 133, 0.25);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 42px rgba(249, 115, 22, 0.22);
}

.btn.ghost {
  border-color: rgba(15, 23, 42, 0.14);
  color: rgba(15, 23, 42, 0.86);
  background: rgba(255, 255, 255, 0.8);
}

.btn.ghost:hover {
  border-color: rgba(15, 23, 42, 0.22);
  background: rgba(255, 255, 255, 0.95);
}

.hero-right {
  display: flex;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
  width: 260px;
  aspect-ratio: 1 / 1.1;
  border-radius: 30px;
  background:
    radial-gradient(circle at 10% 0, rgba(251, 113, 133, 0.18), transparent 60%),
    radial-gradient(circle at 100% 80%, rgba(59, 130, 246, 0.14), transparent 60%),
    rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 42, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 22px 55px rgba(15, 23, 42, 0.12);
}

.avatar-circle {
  width: 165px;
  height: 165px;
  border-radius: 999px;
  border: 2px solid rgba(15, 23, 42, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(15, 23, 42, 0.85);
  font-size: 14px;
  background: radial-gradient(circle at 30% 0, rgba(113, 193, 251, 0.65), rgba(255, 255, 255, 0.95));
  transform: translateY(-25px);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 999px;
  object-position: 50% 8%;
}

.info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.info-pill {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.75);
  color: #cbd5e1;
}

.exp-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.exp-time {
  font-size: 12px;
  color: #9ca3af;
  white-space: nowrap;
}

.exp-role {
  margin-top: 6px;
  font-size: 13px;
  color: #cbd5e1;
}

.mini-title {
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: #e5e7eb;
}

.bullets {
  margin-top: 8px;
  padding-left: 18px;
  color: #9ca3af;
  font-size: 13px;
  line-height: 1.7;
}

.floating-card {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.12);
  font-size: 12px;
  color: rgba(15, 23, 42, 0.8);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}

.dot.online {
  background: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.7);
}

.section {
  padding: 40px 7vw;
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}

.section-subtitle {
  color: rgba(15, 23, 42, 0.62);
  font-size: 14px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  padding: 18px 18px 20px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
}

.card h3 {
  font-size: 16px;
  margin-bottom: 6px;
}

.card p {
  font-size: 14px;
  color: rgba(15, 23, 42, 0.65);
}

.project-card .project-meta {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-meta span {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(251, 113, 133, 0.12);
  color: rgba(236, 72, 153, 0.9);
}

.contact-list {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: rgba(15, 23, 42, 0.82);
}

.contact-item .label {
  width: 40px;
  color: rgba(15, 23, 42, 0.5);
}

.contact-item a {
  color: rgba(249, 115, 22, 0.95);
}

.contact-item a:hover {
  text-decoration: underline;
}

.footer {
  padding: 20px 7vw 28px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  font-size: 12px;
  color: rgba(15, 23, 42, 0.45);
  text-align: center;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .nav {
    padding-inline: 5vw;
  }

  .nav-links {
    display: none;
  }

  .hero {
    grid-template-columns: minmax(0, 1fr);
    padding: 32px 5vw 24px;
  }

  .hero-right {
    order: -1;
  }

  .section {
    padding-inline: 5vw;
  }
}
</style>

