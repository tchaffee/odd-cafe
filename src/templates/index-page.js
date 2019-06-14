import { graphql } from 'gatsby';
// import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
// import { rhythm } from '../utils/typography';
import BlogRoll from '../components/BlogRoll';

class BlogIndexTemplate extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const image = this.props.data.markdownRemark.frontmatter.image;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO image={
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        } />
        <aside>
          <Bio />
        </aside>
        <main>
          <BlogRoll />
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;