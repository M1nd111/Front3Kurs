import React, { useState } from 'react';

const FillBlock = () => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        let val = e.target.value;

        val = val.replace(/\D/g, '');

        let num = Math.min(100, Math.max(0, Number(val)));

        setValue(num);
    };

    return (
        <div style={{ width: '300px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <label>
                Процентик делай(0–100%):
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    style={{ marginLeft: '10px', width: '60px' }}
                />
            </label>

            <div style={{
                marginTop: '20px',
                width: '100%',
                height: '30px',
                backgroundColor: '#eee',
                border: '1px solid #ccc',
                position: 'relative',
            }}>
                <div style={{
                    width: `${value}%`,
                    height: '100%',
                    backgroundColor: '#a91313',
                    transition: 'width 0.3s ease',
                }} />
            </div>
        </div>
    );
};

export default FillBlock;
