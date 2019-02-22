import PropTypes from 'prop-types';
import {data_projects} from "../configs/data";
import Link from "next/link";
const uuidv1 = require('uuid/v1');

  class AllProjects extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        const  crossoriginalStatus = this.props.crossoriginalStatus || false;
        this.state = {
            isCrossOpen: crossoriginalStatus,
            firstTime: true
        }
    }

    handleClick() {      
        const {isCrossOpen} = this.state;
        this.setState({
            isCrossOpen: !isCrossOpen,
            firstTime: false,
        });
    }

    render() {
        const {isCrossOpen, firstTime} = this.state;
        const classNames = 'cross cross--spin js-cross cross-layer-black'  +(isCrossOpen ? ' is-active' : '');
        const classVisible = 'all_projects_bottom' + (firstTime ? '' : (isCrossOpen ? ' slideIn' : ' slideOut'));
        return (
            <section id="all_projects" className="full_width">
                <div className="section_container">
                    <div className="all_projects_top" >
                        <div onClick={this.handleClick} className="allprojects_title_block">
                            <div className="allprojects_title_text">
                                Show All the projects
                            </div >
                            <div className={classNames} type="button"
                                aria-label="Menu" aria-controls="navigation">
                                <span className="cross-box">
                                    <span className="cross-inner"></span>
                                </span>
                            </div>
                        </div>
                   </div>

          <div className={classVisible}>
                   {
                        data_projects.map((item) => {
                            return (
                            <Link as={`/projects/`+ item.id} href={`/projects/`+ item.id} key={uuidv1()} > 
                                <img
                                    key={uuidv1()} 
                                    className="projects_img_link"
                                    src={item.img_logo}
                                    alt={item.title}
                                ></img>
                            </Link>)
                        })
                   } 
                   <div className="clean"></div>
                   </div>

                </div>
            </section>
        );
    }
  }

  AllProjects.propTypes = {
    isOpen: PropTypes.bool,
  };

  export default AllProjects;