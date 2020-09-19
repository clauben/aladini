import { InsertChartRounded } from '@material-ui/icons';
import axios from 'axios';

const instance = axios.create({
baseURL: '' // The API (cloud function) URL
});

export default InsertChartRounded;