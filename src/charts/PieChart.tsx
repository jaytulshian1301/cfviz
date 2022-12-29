import { Pie } from 'react-chartjs-2';
import { Chart as Chartjs,ArcElement, Tooltip, Legend } from 'chart.js';
import {userStatus} from '../types/userstatus';
import parse from '../util/parser';



Chartjs.register(ArcElement, Tooltip, Legend)
export default function PieChart({rawdata, attribute}: {rawdata: userStatus, attribute: "verdict" | "pl" | "probIdx" | "tags"}){

    let parsedData = parse(attribute, rawdata)
    console.log(parsedData)
    return  <Pie data={parsedData} />
    
}