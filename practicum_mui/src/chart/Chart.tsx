import React from 'react';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { tGroup, years, countries, types } from './groupdata';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';

function Chart() {
  type tSelect = 'Страна' | 'Год' | 'Тип';
  const [group, setGroup] = React.useState<tSelect>('Страна');
  const [groupData, setGroupData] = React.useState<tGroup>(countries);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as tSelect;
    setGroup(value);
    if (value === 'Страна') setGroupData(countries);
    else if (value === 'Год') setGroupData(years);
    else if (value === 'Тип') setGroupData(types);
  };

  return (
    <div>
      <Navbar active="3" />
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Box sx={{ width: '200px', m: 'auto' }}>
          <FormControl fullWidth>
            <InputLabel>Группировать по</InputLabel>
            <Select
              id="select-group"
              value={group}
              label="Группировать по"
              onChange={handleChange}
            >
              <MenuItem value="Страна">Страна</MenuItem>
              <MenuItem value="Год">Год</MenuItem>
              <MenuItem value="Тип">Тип</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <GroupChart data={groupData} group={group} />
        <GroupGrid data={groupData} group={group} />
      </Container>
    </div>
  );
}

export default Chart;