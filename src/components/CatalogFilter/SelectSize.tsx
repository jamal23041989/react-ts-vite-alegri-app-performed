import { useContext } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CustomContext } from '../../context/CustomContext'

export const SelectSize = () => {
  const { category, size, setSize } = useContext(CustomContext)

  const handleChange = (e: SelectChangeEvent) => {
    setSize(e.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Размер</InputLabel>

        {category === 'shoes' ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Размер"
            onChange={handleChange}
          >
            <MenuItem value="38">38</MenuItem>
            <MenuItem value="39">39</MenuItem>
            <MenuItem value="40">40</MenuItem>
            <MenuItem value="41">41</MenuItem>
            <MenuItem value="42">42</MenuItem>
            <MenuItem value="">Сбросить</MenuItem>
          </Select>
        ) : category === 't-short' || category === 'sweatshirts' ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Размер"
            onChange={handleChange}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
            <MenuItem value="XXL">XXL</MenuItem>
            <MenuItem value="">Сбросить</MenuItem>
          </Select>
        ) : category === 'pants' ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Размер"
            onChange={handleChange}
          >
            <MenuItem value="34">34</MenuItem>
            <MenuItem value="36">36</MenuItem>
            <MenuItem value="38">38</MenuItem>
            <MenuItem value="40">40</MenuItem>
            <MenuItem value="42">42</MenuItem>
            <MenuItem value="">Сбросить</MenuItem>
          </Select>
        ) : (
          ''
        )}
      </FormControl>
    </Box>
  )
}
