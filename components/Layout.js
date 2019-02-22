import Head from "next/head";
import "../styles.scss"
import Progress from "../components/progress";
import Burger from "../components/burger";
import Menu from "../components/menu";
import Footer from "../components/footer";

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      firstTime: true,
    }
  }
  render(){
    return(
      <section className="page-section">
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Progress />
        <Menu originalStatus={this.state.isOpen} firstTimeStatus={this.state.firstTime} menuChangeStatus={this.menuChangeStatus.bind(this)}/>
        <Burger originalStatus={this.state.isOpen} firstTimeStatus={this.state.firstTime} menuChangeStatus={this.menuChangeStatus.bind(this)}/>
        <div className="main_container">
            {this.props.children}
        </div>
        <Footer />
      </section>
    )
  }

  menuChangeStatus(new_status) {
    // Change the menu status (open/close)
    this.setState({"isOpen": new_status, "firstTime": false});
  }
}

Layout.getInitialProps = async function(props) {
  let title="Latest post on next js";
  let slug="latest-post-next-js";
  return {
    title,
    slug
  }
}

export default Layout;
