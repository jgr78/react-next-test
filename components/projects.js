import Title from "./partials/title";
import Project from "./project";
import {featured_projects} from "../configs/props";
const uuidv1 = require('uuid/v1');
const featuredProjects = featured_projects;

export default () => (
    <section id="section_projects" className="full_width section">
        <div id="projects" className="section_container">
            <Title titleName="Projects"/>
        </div>
        <div id="projects_table" className="section_container">
        {
            featuredProjects.map((item, index) => {
                return  <Project 
                    key={uuidv1()}
                    company={item.company} 
                    project_title={item.project_title}
                    project_img={item.project_img}
                    logo={item.logo}
                    right={item.right}
                    slug={item.slug}
                />
            })
        }
        </div>
    </section>   
)
