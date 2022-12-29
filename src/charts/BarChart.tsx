import { Bar } from 'react-chartjs-2';
import { Chart as Chartjs, CategoryScale,LinearScale, BarElement,Title,Tooltip,Legend } from 'chart.js';
import {userStatus} from '../types/userstatus';
import parse from '../util/parser';



Chartjs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)
export default function BarChart({rawdata, attribute}: {rawdata: userStatus, attribute: "verdict" | "pl" | "probIdx" | "tags"}){

    let parsedData = parse(attribute, rawdata)
    console.log(parsedData)
    return  <Bar data={parsedData} />
    
}