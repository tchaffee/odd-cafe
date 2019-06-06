import React from 'react'
import Layout from '../components/Layout'
import get from 'lodash/get';

const NotFoundPage = (props) => {
  return (
  <Layout location={props.location} title={get(props, 'data.site.siteMetadata.title')}>
      <div>
        <h1>NOT FOUND</h1>
        <p>That link doesn&#39;t exist here... click the logo to return to the home page.</p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query siteData {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;


export default NotFoundPage
