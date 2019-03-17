import React from 'react';
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import style from './styles/slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeProject: 0,
      maxLength: 4 };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.activeProject === this.state.maxLength - 1) {
      return this.setState({ activeProject: 0 });
    }
    this.setState({ activeProject: this.state.activeProject + 1 });
  }
  
  prev() {
    if (this.state.activeProject === 0) {
      return this.setState({ activeProject: this.state.maxLength - 1 });
    }
    this.setState({ activeProject: this.state.activeProject - 1 });
  }

  render() {

    const { toAbout, projects, themeStyle=style } = this.props;
    const current = projects[this.state.activeProject].node.frontmatter;

    return (
      <section className={themeStyle}>
        <div>
          <nav className='portfolio-nav'>
            <button onClick={this.prev}><FontAwesomeIcon icon={['fas', 'chevron-left']} /></button>
            <button onClick={this.next}><FontAwesomeIcon icon={['fas', 'chevron-right']} /></button>
          </nav>
          <TransitionGroup className="article">
            <CSSTransition
              key={current.title}
              timeout={500}
              classNames="fade">
              <article>
                <figure>
                  <Img fluid={current.image.childImageSharp.fluid} />
                </figure>
                <header>
                  <h1>{current.title}</h1>
                  <p>{current.description}</p>
                  <h4>tech:</h4>
                  <p>{current.tech}</p>
                  <a href={current.link}>live</a>
                  {current.code && <a href={current.code}>code</a>}
                </header>
              </article>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <footer> 
          <button onClick={toAbout}>about</button>
        </footer>
      </section>
    )
  }
}

export default Slider;
