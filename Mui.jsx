import React from 'react'
import { Autocomplete, label } from '@mui/material';
import { TextField, Button , ButtonGroup, Checkbox } from '@mui/material';



const labelCheckox = { inputProps: { 'aria-label': 'Checkbox demo' } };


const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];


  
const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'RRR', id: 2 },
  ];


function Mui() {
  return (
      <>
    <div style={{paddingLeft: "10px"}}>
    <h3>Auto Complete</h3>

    <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}

/>

<h3>Button</h3>
<Button variant="text">Text</Button>&nbsp;
<Button variant="contained">Contained</Button>&nbsp;
<Button variant="outlined">Outlined</Button>&nbsp;

<h4>Text button</h4>
<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>

<h4>Contained button</h4>

<Button variant="contained">Contained</Button>&nbsp;
<Button variant="contained" disabled>
  Disabled
</Button>&nbsp;
<Button variant="contained" href="#contained-buttons">
  Link
</Button>&nbsp;
<br></br><br></br>

<Button variant="contained" disableElevation>
  Disable elevation
</Button>

<h4>Outlined button</h4>

<Button variant="outlined">Primary</Button>&nbsp;
<Button variant="outlined" disabled>
  Disabled
</Button>&nbsp;
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>&nbsp;

<h3>Button Group</h3>

<h4>Basic button group</h4>

<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>



<h4>Button variants</h4>


<ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<h4>Sizes and colors</h4>

<ButtonGroup size="small" aria-label="small button group">
  {buttons}
</ButtonGroup>
<ButtonGroup color="secondary" aria-label="medium secondary button group">
  {buttons}
</ButtonGroup>
<ButtonGroup size="large" aria-label="large button group">
  {buttons}
</ButtonGroup>

<h4>Vertical group</h4>


<ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>

      <h3>Checkbox</h3>

      <Checkbox {...labelCheckox} defaultChecked />
      <Checkbox {...labelCheckox} />
      <Checkbox {...labelCheckox} disabled />
      <Checkbox {...labelCheckox} disabled checked />


      
    </div>
    </>
  )
}

export default Mui;
