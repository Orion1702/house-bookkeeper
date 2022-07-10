import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { diffDays } from "../hooks/utils/shortFunction";

const SpendPlanCounter = () => {
    const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
    const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);
    const moneyPerDay = useSelector(state => state.moneyPerDay);
    const totalSpend = useSelector(state => state.totalSpend);
    const [spendPlan, setSpendPlan] = useState({
        dayCount: 0,
        dayPlan: 0,
        totalPlan: 0,
        totalSpend: 0,
        diffPlanAndSpend: 0
    })

    useEffect(() => {
        let diffbetwenDays = Number(diffDays(defFilterDateStart, defFilterDateEnd));
        let totalPlanCount = Number(diffbetwenDays * moneyPerDay).toFixed(2);
        let diffPlanSpend = (totalPlanCount - totalSpend).toFixed(2);
        setSpendPlan({...spendPlan, 
            dayCount: diffbetwenDays,
            dayPlan: moneyPerDay,
            totalPlan: totalPlanCount,
            totalSpend: totalSpend,
            diffPlanAndSpend: diffPlanSpend
        })
    }, [defFilterDateStart, defFilterDateEnd])
    
    return(
        <div className="SpendPlan" style={{display: 'flex', alignItems: 'center'}}>
            
            <div className="SpendPlan__day">
                <div className="SpendPlan__planed">{spendPlan.dayCount} days</div>
                <div className="SpendPlan__spended">{spendPlan.dayPlan}/day</div>
            </div>
            <div className="SpendPlan__total">
                <div className="SpendPlan__planed">{spendPlan.totalPlan} - Plan</div>
                <div className="SpendPlan__spended">{spendPlan.totalSpend} - Spend</div>
            </div>
            <div className="SpendPlan__dif">{spendPlan.diffPlanAndSpend}</div>
        </div>
    )
}

export default SpendPlanCounter;