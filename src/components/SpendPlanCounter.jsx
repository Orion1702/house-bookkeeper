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
        <div className="spendPlan">
            <div className="spendPlan__day">
                <div className="spendPlan__planned">
                    <span className="number">{spendPlan.dayCount}</span> <span className="t-small opacity-05">days</span>
                </div>
                <div className="spendPlan__spent">
                    <span className="number">{spendPlan.dayPlan}</span> <span className="t-small opacity-05">/day</span>
                </div>
            </div>
            <div className="spendPlan__total">
                <div className="spendPlan__spent">
                    <span className="number">{spendPlan.totalSpend}</span>  <span className="t-small opacity-05">- spent</span>
                </div>
                <div className="spendPlan__planed">
                    <span className="number">{spendPlan.totalPlan}</span>  <span className="t-small opacity-05">- planned</span>
                </div>
            </div>
            <div className="spendPlan__dif">
                <span className={spendPlan.diffPlanAndSpend > 0 ? 'number green' : 'number red'}>
                    {spendPlan.diffPlanAndSpend}
                </span>
            </div>
        </div>
    )
}

export default SpendPlanCounter;