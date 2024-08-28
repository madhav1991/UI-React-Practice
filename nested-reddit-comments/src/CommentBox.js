const CommentBox = ({data})=> {
    return data.map((comment) => (
        <>
            <div>{comment.userName}</div>
            <div>{comment.comment}</div>
            <div className="nested-comments">
                {comment?.replies && 
                    <CommentBox data={comment?.replies}/>
                }
            </div>
          
        </>
    ))
}

export default CommentBox

