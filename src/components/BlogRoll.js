import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>
                    {formatPostDate(node.frontmatter.date, 'en')}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </article>
            );
          })}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              timeToRead
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
