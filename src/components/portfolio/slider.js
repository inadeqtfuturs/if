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

    const { toHome, toAbout, projects, themeStyle=style } = this.props;
    const current = projects[this.state.activeProject].node.frontmatter;

    return (
      <section className={themeStyle}>
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
                <a href={current.link}>take a closer look  <FontAwesomeIcon icon={['fas', 'arrow-right']} /></a>
              </header>
            </article>
          </CSSTransition>
        </TransitionGroup>
        <footer>
          <nav>
            <button onClick={this.prev}>back</button>
            <button onClick={this.next}>next</button>
          </nav>
          <nav>
            <button onClick={toHome}>home</button>
            <button onClick={toAbout}>about</button>
          </nav>
        </footer>
      </section>
    )
  }
}

export default Slider;
