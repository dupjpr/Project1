import { useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';

import { useForm } from "../../Hooks/useForm.js";

const Filter = () => {

    const storeData = useSelector(state => state);
    const [values, handleInputChange, reset] = useForm({ selectOption: '' });

    console.log(values);
    let options = [];

    storeData?.data && storeData.data.forEach((item) => {
        const check = options.some((type) => {
            return type === item.types[0].type.name;
        })

        if (!check) {
            options.push(item.types[0].type.name)
        }

    });

    const filterState = () => {
        console.log('filtrando');
        const newState = storeData.data.filter((pokemon) => {
            return pokemon.types[0].type.name === values.selectOption;
        })
        console.log(newState);
    }

    values.selectOption && filterState()

    return (
        <div>
            { storeData?.data &&
                (<select
                    defaultValue='choose the pokemon type'
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