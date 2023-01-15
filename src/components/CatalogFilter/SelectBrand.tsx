import { useContext } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CustomContext } from '../../context/CustomContext'

export const SelectBrand = () => {
  const { dispatch, state } = useContext(CustomContext)

  const handleChange = (e: SelectChangeEvent) => {
    dispatch({ type: 'change_brand', payload: e.target.value })
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Бренд</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.catalog.brand}
          label="Бренд"
          onChange={handleChange}
        >
          {state.catalog.brands.map((item: string[]) => (
            <MenuItem key={`${item}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
