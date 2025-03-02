import React, { useState } from 'react';
import Graph from './graph';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Preahvihear&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=Josefin+Sans&display=swap');
</style>

const ShortestPathFinder = ({ dist, kms }) => {
  document.title='Shortest Path Finder'
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [result, setResult] = useState('');

  const handleFindPath = () => {
    const g1 = new Graph(dist.length);

    for (const km of kms) {
      g1.addEdge(km[0], km[1], km[2]);
    }

    const i1 = dist.indexOf(start);
    const i2 = dist.indexOf(end);

    if (i1 === -1 || i2 === -1) {
      setResult('Invalid districts.');
      return;
    }

    const { minDist, path } = g1.dijkstra(dist, i1, i2);

    let resultHtml = (
      <div >
        <div>
        <p >Shortest distance from {start} to {end} is: {minDist[i2]} Kms.</p>
        </div>
        <p>Path from {start} to {end}:</p>
        <div className='path'>
        <ul className='list' list-style='none'>
          {path.map((vertexIndex,index) => (
            <>            <li key={vertexIndex}>{dist[vertexIndex]} </li>
            {index<path.length-1 &&<ArrowDownwardIcon fontSize='large' sx={{display:'flex',justifyContent:"center"}}/>}
            </>
          ))}
        </ul>
        </div>

      </div>
    );

    setResult(resultHtml);
  };

  return (
    <div className='main'>
      <h1 className='head'>Shortest Path Finder</h1>
      <div className='getinp'>
        <FormControl>
          <InputLabel>Select Starting District</InputLabel>
          <Select
            value={start}
            onChange={(e) => setStart(e.target.value)}
            label="Select Starting District"
            sx={{ minWidth: "200px" }}
          >
            {dist.map((district, index) => (
              <MenuItem key={index} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl>
          <InputLabel>Select Destination District</InputLabel>
          <Select
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            label="Select Destination District"
            sx={{ minWidth: "200px" }}
          >
            {dist.map((district, index) => (
              <MenuItem key={index} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Button variant="contained" onClick={handleFindPath}>
          Find Shortest Path
        </Button>
      </div>
      <div id="result" className='result' >{result}</div>
    </div>
  );
};

export default ShortestPathFinder;
