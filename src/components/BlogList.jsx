import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'React Hooks 入门指南',
    excerpt: '本文介绍React Hooks的基本概念和使用方法，帮助你快速上手这个强大的特性。',
    date: '2024-03-15',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20Hooks%20tutorial%20code%20snippet&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '前端性能优化最佳实践',
    excerpt: '探索前端性能优化的各种方法，从代码层面到构建工具，全面提升网站速度。',
    date: '2024-03-10',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=frontend%20performance%20optimization%20dashboard&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: 'TypeScript 高级类型技巧',
    excerpt: '深入了解TypeScript的高级类型系统，掌握泛型、条件类型等强大特性。',
    date: '2024-03-05',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TypeScript%20advanced%20types%20code&image_size=landscape_16_9'
  },
  {
    id: 4,
    title: 'CSS Grid 布局完全指南',
    excerpt: '从基础到高级，全面掌握CSS Grid布局，创建复杂的响应式设计。',
    date: '2024-02-28',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20Grid%20layout%20design&image_size=landscape_16_9'
  },
  {
    id: 5,
    title: 'Node.js 微服务架构设计',
    excerpt: '学习如何设计和实现基于Node.js的微服务架构，提高系统的可扩展性。',
    date: '2024-02-20',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20microservices%20architecture&image_size=landscape_16_9'
  },
  {
    id: 6,
    title: 'Git 工作流最佳实践',
    excerpt: '掌握Git的高级使用技巧，建立规范的版本控制工作流程。',
    date: '2024-02-15',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Git%20workflow%20diagram&image_size=landscape_16_9'
  }
]

const BlogList = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <Link to={`/blog/${post.id}`} className="read-more">阅读更多</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList