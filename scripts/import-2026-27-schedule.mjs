import fs from 'node:fs/promises';
const SOURCE='https://gist.githubusercontent.com/brucehart/cd0e546bbe657c94643652455de08969/raw/03077f23acd5caf39b72b9a2332c95d91d18f6a0/nba-2026-27-regular-season-schedule.json';
const res=await fetch(SOURCE);if(!res.ok)throw new Error('Schedule download failed: '+res.status);const raw=await res.json();
console.log('TOP',Object.keys(raw)); console.log('SAMPLE',JSON.stringify(raw).slice(0,3000));
throw new Error('SCHEMA_PROBE');
