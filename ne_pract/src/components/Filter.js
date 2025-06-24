const Filter = ({fullData, data, filtering}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const filterText = {
            "name": form["name"].value.toLowerCase()
        };

        const filterRange = {
            "productionCount": [
                form["productionCount_from"].value ? parseFloat(form["productionCount_from"].value) : -Infinity,
                form["productionCount_to"].value ? parseFloat(form["productionCount_to"].value) : Infinity
            ],
            "rating": [
                form["rating_from"].value ? parseFloat(form["rating_from"].value) : -Infinity,
                form["rating_to"].value ? parseFloat(form["rating_to"].value) : Infinity
            ],
            "price": [
                form["price_from"].value ? parseFloat(form["price_from"].value) : -Infinity,
                form["price_to"].value ? parseFloat(form["price_to"].value) : Infinity
            ],
            "maxSpeed": [
                form["maxSpeed_from"].value ? parseFloat(form["maxSpeed_from"].value) : -Infinity,
                form["maxSpeed_to"].value ? parseFloat(form["maxSpeed_to"].value) : Infinity
            ]
        };

        let filtered = fullData;

        for (const key in filterText) {
            const value = filterText[key];
            if (value) {
                filtered = filtered.filter(item =>
                    item[key].toLowerCase().includes(value)
                );
            }
        }

        for (const key in filterRange) {
            const [min, max] = filterRange[key];
            filtered = filtered.filter(item => {
                const val = parseFloat(item[key]);
                return val >= min && val <= max;
            });
        }

        filtering(filtered);
    };

    const handleReset = (event) => {
        event.preventDefault();
        event.target.form.reset();
        filtering(fullData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="filter-group">
                <label>Название авто:</label>
                <input name="name" type="text"/>
            </div>
            <div className="filter-group">
                <label>Количестов выпущенных:</label>
                <input name="productionCount_from" type="number"/>
                <label>до:</label>
                <input name="productionCount_to" type="number"/>
            </div>
            <div className="filter-group">
                <label>Рейтинг:</label>
                <input name="rating_from" type="number"/>
                <label>до:</label>
                <input name="rating_to" type="number"/>
            </div>
            <div className="filter-group">
                <label>Прайс:</label>
                <input name="price_from" type="number" step="0.1"/>
                <label>до:</label>
                <input name="price_to" type="number" step="0.1"/>
            </div>
            <div className="filter-group">
                <label>Максимальная скорость:</label>
                <input name="maxSpeed_from" type="number"/>
                <label>до:</label>
                <input name="maxSpeed_to" type="number"/>
            </div>
            <div className="filter-group">
                <button type="submit">Применить фильтр</button>
                <button type="reset" onClick={handleReset}>Сбросить фильтр</button>
            </div>
        </form>
    );
};

export default Filter;