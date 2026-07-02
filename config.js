// Deployment configuration — deliberately kept in its own file, separate
// from index.html. Every previous version of index.html had these two
// values inline, which meant every feature update (a fresh full copy of
// index.html) silently reverted them back to placeholder text. Splitting
// them out here means future file replacements never touch this file, and
// this file never gets replaced.
//
// If you ever rotate your API key, this is the ONLY file you need to edit.
//
// SCRIPT_URL should almost never need to change. It only changes if you
// click "New deployment" in Apps Script — don't do that for routine code
// updates. When you edit any .gs file, the correct steps are:
//   1. Save the code (Ctrl+S).
//   2. Deploy > Manage deployments > click the pencil icon on your
//      EXISTING deployment > Version: "New version" > Deploy.
// That pushes new code live WITHOUT changing this URL. "New deployment"
// creates a second, separate URL and leaves the old one still running —
// only use it if you deliberately want a fresh deployment, and if you do,
// update SCRIPT_URL below to match, since that's the one legitimate
// reason this file would ever need editing again.

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFsJ_99-mvOcRx4TaEuocmiXzhzkvKi7qmS4TmXoEMwhNk8v1MVfHOLJmAl50YQ2Fx/exec';
const API_KEY = 'K6UCB8gOxERwlj1RbBYZ1uZCguKrnJyF';
