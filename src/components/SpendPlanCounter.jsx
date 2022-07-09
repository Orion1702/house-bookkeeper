import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { FilterContext } from "../context";

const SpendPlanCounter = () => {
    // const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
    // const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);
    // const {filter, setFilter} = useContext(FilterContext)
    
    return(
        <div className="SpendPlan" style={{display: 'flex', alignItems: 'center'}}>
            <div className="SpendPlan__math">
                <div className="SpendPlan__planed">planed</div>
                <div className="SpendPlan__spended">spended</div>
            </div>
            <div className="SpendPlan__dif">dif = </div>
        </div>
    )
}

export default SpendPlanCounter;