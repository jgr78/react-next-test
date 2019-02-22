import Link from "next/link";

export default (props) => (
    <div className="project__general">
        <Link as={`/projects/` + props.slug} href={`projects/` + props.slug}>
            <img className={`cursor_pointer project__background${ (props.right) ? props.right : "" } block_shadow `} src={props.project_img} />  
        </Link>
        
        <Link as={`/projects/` + props.slug} href={`projects/` + props.slug}>
            <img id={props.slug} data-morph="300"  className={`cursor_pointer project__logo${ (props.right) ? props.right : "" } block_shadow `} src={props.logo} />
        </Link>
    
        <Link as={`/projects/` + props.slug} href={`projects/` + props.slug}>
            <div className={`cursor_pointer + ${(props.right ? "project_text" + props.right : "project_text")}`}>
                <div className="project_text_row_up">
                    <div className="color_square color_square_dark_orange">
                    </div>
                    <div className="project_text_small">
                        {props.company}
                    </div>
                </div>
                <div className="project_text_row_down project_text_big">
                    {props.project_title}
                </div>
            </div>
        </Link>
    </div> 
)
