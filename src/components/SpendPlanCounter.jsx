import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SpendPlanCounter = () => {
    const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
    const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);

    useEffect(() => {
        
    }, [])
    
    return(
        <div className="SpendPlan" style={{display: 'flex', alignItems: 'center'}}>
            <div className="SpendPlan__math">
                <div className="SpendPlan__planed">planed</div>
                <div className="SpendPlan__spended">spended</div>
            </div>
            <div className="SpendPlan__dif">dif = {defFilterDateStart}</div>
        </div>
    )
}

export default SpendPlanCounter;