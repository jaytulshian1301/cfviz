import {userStatus} from '../types/userstatus'


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function verdict(rawdata:userStatus){
    let chartData:any = {}
    let final = {}
    for(let result of rawdata.result){
        if(result.verdict in chartData) chartData[result.verdict] +=1
        else chartData[result.verdict] = 1
    }
    let n = Object.keys(chartData).length
    let bg = []
    for(let i = 0; i<n; i++) bg.push(getRandomColor())
    final = {
        labels: Object.keys(chartData),
        datasets:[{
            label: "",
            data: Object.values(chartData),
            backgroundColor: bg,
        }]
    }
    return final
}

function pl(rawdata:userStatus){
    let chartData:any = {}
    let final = {}
    for(let result of rawdata.result){
        if(result.programmingLanguage in chartData) chartData[result.programmingLanguage] +=1
        else chartData[result.programmingLanguage] = 1
    }
    let n = Object.keys(chartData).length
    let bg = []
    for(let i = 0; i<n; i++) bg.push(getRandomColor())
    final = {
        labels: Object.keys(chartData),
        datasets:[{
            label: "",
            data: Object.values(chartData),
            backgroundColor: bg,
        }]
    }
    return final
    
}
function tags(rawdata:userStatus){
    let chartData:any = {}
    for(let result of rawdata.result){
        for(let tag of result.problem.tags){
            if(tag in chartData) chartData[tag] +=1
            else chartData[tag] = 1
            
        }
    }
    let n = Object.keys(chartData).length
    let bg = []
    for(let i = 0; i<n; i++) bg.push(getRandomColor())
    let final = {}
    final = {
        labels: Object.keys(chartData),
        datasets:[{
            label: "",
            data: Object.values(chartData),
            backgroundColor: bg
        }]
    }
    return final
    
}
function probIdx(rawdata:userStatus){
    let chartData:any = {}
    for(let result of rawdata.result){
        if(result.problem.index in chartData) chartData[result.problem.index] +=1
        else chartData[result.problem.index] = 1
    } 
    let n = Object.keys(chartData).length
    let bg = []
    for(let i = 0; i<n; i++) bg.push(getRandomColor())
    let final = {}
    final = {
        labels: Object.keys(chartData),
        datasets:[{
            label: "",
            data: Object.values(chartData),
            backgroundColor: bg
        }]
    }
    return final
}



export default function parse(attribute: "verdict" | "pl" | "tags" | "probIdx", rawdata: userStatus){
    
    if(attribute == "verdict") return verdict(rawdata)
    if(attribute == "pl") return pl(rawdata)
    if(attribute == "tags") return tags(rawdata)
    if(attribute == "probIdx") return probIdx(rawdata)

}