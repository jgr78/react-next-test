import Title from "./partials/title";
import {clients_list} from "../configs/props";
const uuidv1 = require('uuid/v1');
const clientsList = clients_list;

export default () => (
    <section id="section_clients" className="full_width">
        <div id="clients" className="section_container">
            <Title titleName="Clients" />
        </div>
        <div className="clients_table">
        {
            clientsList.map((item,index) => {
                return <img key={uuidv1()} src={item.url} className="client_img" id={index}/>
            })
        }
        </div>
    </section>   
)