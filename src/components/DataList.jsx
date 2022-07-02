import React from "react";
import DataItem from "./DataItem";

const DataList = ({posts}) => {
    

    return (
        <div>
            DataList
            {posts.map(post => 
                <DataItem post={post} />
            )}
        </div>
    )
}

export default DataList;