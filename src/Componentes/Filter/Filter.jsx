import { useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';

const Filter = () => {

    const storeData = useSelector(state => state);

    let options = [];

    storeData?.data && storeData.data.forEach((item) => {
        const check = options.some((type) => {
            return type === item.types[0].type.name;
        })

        if (!check) {
            options.push(item.types[0].type.name)
        }

    });

    return (
        <div>
            { storeData?.data &&
                (<select defaultValue='choose the pokemon type'>
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