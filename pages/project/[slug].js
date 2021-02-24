import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import glob from 'glob'
import styled from '@emotion/styled'
import Layout from '../../components/layout/Layout'

export default function BlogTemplate(props) {
  return (
    <Layout pageTitle={props.frontmatter.title} siteTitle={props.siteTitle}>
      <ArticleS>
        <h1>{props.frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={props.markdownBody} />
        </div>
      </ArticleS>
    </Layout>
  )
}

const ArticleS = styled.article`
  width: 88%;
  max-width: 900px;
  margin: 20px auto;
`

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/project/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
