import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import get from 'lodash/get';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={get(this.props, 'data.site.siteMetadata.title')}>

        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query blogSiteData {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
