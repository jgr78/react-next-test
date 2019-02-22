import React from 'react';

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.documetHeight = 100;
        this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.state = {
            scrolled: 100
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
        this.documetHeight = document.body.clientHeight - document.documentElement.clientHeight;
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }
  
    handleScrollToElement(event) {
        const lastScrollY = window.scrollY;
        const totalHeight = this.documetHeight;
        let myscrolled = 100 - ((lastScrollY / totalHeight) * 100);      
        myscrolled = (myscrolled < 0 ) ? 0 : ((myscrolled > 100) ? 100 : myscrolled);
        this.setState({scrolled: myscrolled});
    }

    render() {
      const { scrolled } = this.state;
      return (
        <div className="header">
            <div className="progress-container">
                <div className="progress-bar-bottom" id="bar_bottom">
                </div>
                <div className="progress-bar-top" id="bar_top" 
                  style={{"clipPath": `inset(0px   ${scrolled}% 0px 0px)`,
                          "WebkitClipPath": `inset(0px   ${scrolled}% 0px 0px)`}}   
                 >
                </div>
            </div> 
        </div>
      );
    }
  }

  export default Progress;