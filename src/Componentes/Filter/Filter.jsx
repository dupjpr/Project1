import { useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';

import { useDispatch } from "react-redux";
import { useForm } from "../../Hooks/useForm.js";

import filter from '../../Redux/actions/filter.js';






const Filter = () => {

    const storeData = useSelector(state => state);
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({ selectOption: '' });

    console.log(values);
    let options = [];

    storeData?.options && storeData.options.forEach((item) => {

        const check = options.some((type) => {
            return type === item.types[0].type.name;
        })

        if (!check) {
            options.push(item.types[0].type.name)
        }

    });

    const filterState = () => {
        console.log('filtrando');
        dispatch(filter(values.selectOption));
        reset();

        // const newState = storeData.options.filter((pokemon) => {
        //     return pokemon.types[0].type.name === values.selectOption;
        // })
        // console.log(newState);
    }

    values.selectOption && filterState()

    return (
        <div>
            { storeData?.options &&
                (<select
                    value={values.selectOption}
                    name='selectOption'
                    onChange={handleInputChange}
                >
                    <option value='choose the pokemon type' disabled>choose the pokemon type</option>
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