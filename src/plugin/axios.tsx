import axios from "axios";



axios.defaults.baseURL = "https://api.sheetbest.com/sheets/dfc794b3-7481-4133-8486-3151098f0244"
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios