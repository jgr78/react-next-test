import Link from "next/link";
import Layout from '../components/Layout.js'
import {data_projects} from '../configs/data.js'
import {withRouter} from 'next/router'

const Post = withRouter((props) => (
    <Layout title={props.title}>
        <Link as={`/`}  href={`/`}>
        <a title="Link to the page post">TO HOME</a>
        </Link>

        <section id="section_individual" className="full_width section">
            <div id="individual_project" className="section_container">
                <div id="individual_image_block">
                    <img src={props.img_project} id={props.slug} className="individual_image"/>
                </div>
            </div>
        </section>
    </Layout>
))

Post.getInitialProps = (context) => {
    const { id , slug} = context.query;
    const { res } = context;  
    const project = data_projects.find((item) => item.id === slug);
    
    if (!project) {
        // if project doesnt exist we redirect to home
        res.redirect('/');
        return {}
    }
    
    const {title, img_project, img_logo, client} =  project;
    return { id, slug, title, img_project, img_logo, client }

  }

  

export default Post;