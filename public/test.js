import { type } from "@testing-library/user-event/dist/type";

const app = (
    <div className="posts-list">
        <div className="post-item">
            <img src="http:.."></img>
            <h2 className="post-title">C#</h2>
            <p className="post-desc">abc</p>
            <p className="post-pubs">xyz</p>
        </div>
    </div>
)

console.log(app);

ReactDOM.render(app, document.getElementById('app'))


function Src() {
    return (
        <img src="http:.."></img>
    )
}



function Postitem() {
    return (
        <div className="post-item"></div>
    )
}

function PostList() {
    return (
        <div className="posts-list">
            <Postitem />
        </div>
    )
}