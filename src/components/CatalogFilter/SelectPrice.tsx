import { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CustomContext } from '../../context/CustomContext'

export const SelectPrice = () => {
  const { price, setPrice } = useContext(CustomContext)

  const handleChange = (e: SelectChangeEvent) => {
    setPrice(e.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Цена</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value="asc">По возрастанию</MenuItem>
          <MenuItem value="desc">По убыванию</MenuItem>
          <MenuItem value="">Сбросить</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
