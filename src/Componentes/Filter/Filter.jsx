import { useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../Hooks/useForm.js";

import filter from '../../Redux/actions/filter.js';

const Filter = () => {

    const storeData = useSelector(state => state);

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({ selectOption: '' });

    let options = [];

    storeData?.filterInfo && storeData.filterInfo.forEach((item) => {

        const check = options.some((type) => {
            return type === item.types[0].type.name;
        })

        if (!check) {
            options.push(item.types[0].type.name)
        }

    });
    
    useEffect(() => {
        values?.typeSelected && dispatch(filter(values.typeSelected))
        reset()
    }, [values.typeSelected])

    return (
        <div>
            { storeData?.filterInfo &&
                (<select
                    name='typeSelected'
                    onChange={handleInputChange}
                >
                    <option>Choose an option</option>
                    {options.map((item) => (
                        <option key={uuid()} value={item}>{item}</option>
                    ))
                    }
                </select>)
            }
        </div>
    );
}

export default Filter;