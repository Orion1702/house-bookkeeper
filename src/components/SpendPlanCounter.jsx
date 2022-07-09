import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SpendPlanCounter = () => {
    const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
    const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);
    
    return(
        <div className="SpendPlan" style={{display: 'flex', alignItems: 'center'}}>
            <div className="SpendPlan__math">
                <div className="SpendPlan__planed">planed {defFilterDateStart}</div>
                <div className="SpendPlan__spended">spended {defFilterDateEnd}</div>
            </div>
            <div className="SpendPlan__dif">dif = </div>
        </div>
    )
}

export default SpendPlanCounter;