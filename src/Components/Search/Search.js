import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';

const Search = () => {
        const history = useHistory();
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
    
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
        };
        function handleSelect(ranges){
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
        }
    return (
        <div className="search">
           <DateRangePicker ranges={
               [selectionRange]} onChange =
               {handleSelect} />
               <Button className="start__booking" onClick={()=> history.push('/searchresult')}>
                   Start Booking</Button>

        </div>
    );
};

export default Search;