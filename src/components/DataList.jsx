import React from "react";
import DataItem from "./DataItem";

const DataList = ({posts}) => {


    return (
        <div>
            {/* {posts[200].date} */}
            <hr />
            {posts.map(post => 
                <DataItem post={post} />
            )}
        </div>
    )
}

export default DataList;