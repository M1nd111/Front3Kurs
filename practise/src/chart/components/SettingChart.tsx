import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

type tSeries = {
  'Максимальные лайки': boolean;
  'Средние лайки': boolean;
  'Минимальные лайки': boolean;
  'Максимальные репосты': boolean;
  'Средние репосты': boolean;
  'Минимальные репосты': boolean;
  'Максимальные просмотры': boolean;
  'Средние просмотры': boolean;
  'Минимальные просмотры': boolean;
};

type CheckboxProps = {
  series: tSeries;
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ m: '20px 0' }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup
          name="group-radio"
          value={isBar ? 'bar' : 'dot'}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="bar" control={<Radio checked={isBar} />} label="Гистограмма" />
          <FormControlLabel value="dot" control={<Radio checked={!isBar} />} label="Линейная" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-checkbox-group">На диаграмме показать:</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Максимальные лайки']}
              onChange={handleCheckboxChange}
              name="Максимальные лайки"
            />
          }
          label="Максимальные лайки"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средние лайки']}
              onChange={handleCheckboxChange}
              name="Средние лайки"
            />
          }
          label="Средние лайки"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Минимальные лайки']}
              onChange={handleCheckboxChange}
              name="Минимальные лайки"
            />
          }
          label="Минимальные лайки"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Максимальные репосты']}
              onChange={handleCheckboxChange}
              name="Максимальные репосты"
            />
          }
          label="Максимальные репосты"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средние репосты']}
              onChange={handleCheckboxChange}
              name="Средние репосты"
            />
          }
          label="Средние репосты"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Минимальные репосты']}
              onChange={handleCheckboxChange}
              name="Минимальные репосты"
            />
          }
          label="Минимальные репосты"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Максимальные просмотры']}
              onChange={handleCheckboxChange}
              name="Максимальные просмотры"
            />
          }
          label="Максимальные просмотры"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средние просмотры']}
              onChange={handleCheckboxChange}
              name="Средние просмотры"
            />
          }
          label="Средние просмотры"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Минимальные просмотры']}
              onChange={handleCheckboxChange}
              name="Минимальные просмотры"
            />
          }
          label="Минимальные просмотры"
        />
      </FormControl>
    </Stack>
  );
}

export default SettingChart;