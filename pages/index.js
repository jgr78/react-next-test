import "../styles.scss"
import Logo from "../components/logo";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Aboutus from "../components/aboutus";
import AllProjects from "../components/allprojects";
import Layout from '../components/Layout.js'

  export default class extends React.Component {
    render() {
      return (
        <Layout title={"Home page"}>
        <Logo />
        <Aboutus />
        <Projects />
        <AllProjects  crossoriginalStatus={false}/>
        <Clients />
      </Layout>
      )
    }
  }
