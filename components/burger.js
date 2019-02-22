import PropTypes from 'prop-types';

  class Burger extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      const  originalStatus = this.props.originalStatus | false;
      const firstTimeStatus = this.props.firstTimeStatus | true;
      const menuChangeStatus = this.props.menuChangeStatus | ((e) => {});
      this.state = {
        firstTime: firstTimeStatus,
        isOpen: originalStatus,
        menuChangeStatus: menuChangeStatus
      }
    }

    function() {
      var overlay_toAnimate = document.querySelector('#overlay_layer');
      var hamburger_button = document.querySelector('.hamburger');

      hamburger_button.addEventListener('click', function() {
        hamburger_button.classList.toggle("is-active");
        if (overlay_toAnimate.classList.contains('overlay-animate')) {
          overlay_toAnimate.classList.remove('overlay-animate');
          overlay_toAnimate.classList.add('overlay-animate-reverse');
        } else {
          overlay_toAnimate.classList.add('overlay-animate');
          overlay_toAnimate.classList.remove('overlay-animate-reverse');
        }
      });
    }

    static getDerivedStateFromProps(props, state) {
      if (props.originalStatus !== state.isOpen) {
        return {
          isOpen: props.originalStatus,
          firstTime: props.firstTimeStatus, 
          menuChangeStatus: props.menuChangeStatus
        };
      }
      return null;
    }
  
    handleClick() {
      const {isOpen} = this.state;
      this.setState({"isOpen": !isOpen});
      this.props.menuChangeStatus(!isOpen);
    }

    render() {
      const {isOpen} = this.state;
      const classNames = 'hamburger hamburger--spin js-hamburger'  +(isOpen ? ' is-active' : '');
      return (
        <section id="section_burger" className="full_width">
            <div id="burger_block">
                <img id="burguer_img" src="../static/img/burger_background.svg" />
                <div className={classNames} type="button"
                aria-label="Menu" aria-controls="navigation"
                onClick={this.handleClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </div>
            </div>
        </section>
      );
    }
  }

  Burger.propTypes = {
    isOpen: PropTypes.bool,
    firstTime: PropTypes.bool,
    menuChangeStatus: PropTypes.func
  };

  export default Burger;