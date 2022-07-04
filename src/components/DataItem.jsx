import React from "react";

const DataItem = ({post}) => {
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
           <div>
            {post.name}
           </div>
           <div>{post.date}
            {/* {post.date ? ExcelDateToJSDate(post.date) : 'no date'} */}
           </div>
        </div>
    )
}

export default DataItem;