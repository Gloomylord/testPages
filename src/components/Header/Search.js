import React, {useState, useCallback} from 'react';
import search from './search.svg';
import classes from './classes.module.css';

export default function Search() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(''); //для контроля input
    const onChange = useCallback((e) => {
        setValue(e.target.value)
    }, [value]);
    const onToggle = useCallback(() => {
        setOpen(!open);
    }, [open]);
    return <div className={classes.search}>
        <input className={classes.inputSearch + ' ' + ((open) ? classes.open : classes.close)}
               value={value}
               onChange={onChange}/>
        <button className={classes.searchButton} onClick={onToggle}>
            <img src={search} alt={search}/>
        </button>
    </div>
}