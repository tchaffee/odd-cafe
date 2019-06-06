import React from 'react';
import profilePic from '../assets/profile-pic.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Todd Chaffee`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          A Personal blog by{' '}
          <a href="https://mobile.twitter.com/chaffeet" target="_blank" rel="noopener noreferrer">Todd Chaffee</a>.{' '}
          Mostly&nbsp;about coding.
        </p>
      </div>
    );
  }
}

export default Bio;
