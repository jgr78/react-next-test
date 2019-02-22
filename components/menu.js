import PropTypes from 'prop-types';
import Link from "next/link";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        const originalStatus = props.originalStatus || false;
        const firstTimeStatus = props.firstTimeStatus || true;
        const menuChangeStatus = props.menuChangeStatus || ((e) => {});
        this.state = {
            firstTime: firstTimeStatus,
            isOpen: originalStatus,
            menuChangeStatus: menuChangeStatus
        }
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

    handleClick = (event, section) => {
        event.preventDefault();
     
        const {isOpen} = this.state;
        this.setState({"isOpen": !isOpen});
        this.props.menuChangeStatus(!isOpen);

        window.location = "\/#" + section;
        return true;
    }

    render() {
      const {isOpen, firstTime} = this.state;
      const auxClasses = firstTime ? '' : (isOpen ? ' overlay-animate' : 'overlay-animate-reverse');
      const classNames = 'overlay '  + auxClasses;
      return (
        <div id="overlay_layer" className={classNames}> 
            <div id="menu_options" className="flexbox-container">
                <ul id="menu_list">
                    <li className="menu_item" >
                        <a href="" onClick={(e) => this.handleClick(e, "")}>HOME</a>
                    </li>
                    <li className="menu_item">
                        <a href="" onClick={(e) => this.handleClick(e, "section_projects")}>PROJECTS</a>
                    </li>
                    <li className="menu_item">
                        <a href="" onClick={(e) => this.handleClick(e, "section_contact")}>CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
}

Menu.propTypes = {
    isOpen: PropTypes.bool,
    firstTime: PropTypes.bool,
    menuChangeStatus: PropTypes.func
};

export default Menu;