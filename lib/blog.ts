/* eslint-disable regexp/no-super-linear-backtracking */
import fs from 'fs'
import path from 'path'
import { siteConfig } from 'lib/config'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export interface Post {
   title: string
   publishedAt: string
   summary: string
   author: string
   slug: string
   image?: string
}

function parseFrontmatter(fileContent: string) {
   const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
   const match = frontmatterRegex.exec(fileContent)
   const frontMatterBlock = match![1]
   const content = fileContent.replace(frontmatterRegex, '').trim()
   const frontMatterLines = frontMatterBlock.trim().split('\n')
   const metadata: Partial<Post> = {}

   frontMatterLines.forEach((line) => {
      const [key, ...valueArr] = line.split(': ')
      let value = valueArr.join(': ').trim()
      value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
      metadata[key.trim() as keyof Post] = value
   })

   return { data: metadata as Post, content }
}

function getMDXFiles(dir: string) {
   return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

export async function markdownToHTML(markdown: string) {
   const p = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
         theme: {
            light: 'min-light',
            dark: 'min-dark',
         },
         keepBackground: false,
      })
      .use(rehypeStringify)
      .process(markdown)

   return p.toString()
}

export async function getPost(slug: string) {
   const filePath = path.join('content', `${slug}.mdx`)
   const source = fs.readFileSync(filePath, 'utf-8')
   const { content: rawContent, data: metadata } = parseFrontmatter(source)
   const content = await markdownToHTML(rawContent)
   const defaultImage = `${siteConfig.url}/og?title=${encodeURIComponent(
      metadata.title,
   )}`
   return {
      source: content,
      metadata: {
         ...metadata,
         image: metadata.image || defaultImage,
      },
      slug,
   }
}

async function getAllPosts(dir: string) {
   const mdxFiles = getMDXFiles(dir)
   return Promise.all(
      mdxFiles.map(async (file) => {
         const slug = path.basename(file, path.extname(file))
         const { metadata, source } = await getPost(slug)
         return {
            ...metadata,
            slug,
            source,
         }
      }),
   )
}

export async function getBlogPosts() {
   return getAllPosts(path.join(process.cwd(), 'content'))
}
