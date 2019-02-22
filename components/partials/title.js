const title = (props) => (
    <div className="title_block">
        <h2 className={"title_text" + (props.titleStyle ? ' title_inverse_color' : '')}>{props.titleName}</h2>
        <div className={props.titleStyle ? 'title_inverse_underline' : 'title_underline'}></div>
    </div>
)
export default title