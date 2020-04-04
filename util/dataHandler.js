function handleEpiKurve(rows) {
    
        let data = [];
        let dataObject = {};
        for (i in rows){
            dataObject = new Object();
            for (j in rows[i]){
                if(i>=6){
                    if(j==0){
                        dataObject.date=rows[i][j];
                    }
                    else{
                        dataObject.cases=rows[i][j];
                        data.push(dataObject);
                    }
                }
            }        
        }
        return data;    
}

function handleAltersVerteilung(rows) {
        let data = [];
        let dataObject = {};
        for (i in rows){
            dataObject = new Object();
            for (j in rows[i]){
                if(i>=7 && i<=15){
                    switch (j) {
                        case "0":
                        dataObject.age=rows[i][j];
                        break;
                        case "1":
                        dataObject.maleInfectionCount=rows[i][j];
                        break;
                        
                        case "2":
                        dataObject.malePercentage=rows[i][j];
                        break;
                        
                        case "3":
                        dataObject.malePer100k=rows[i][j];
                        break;
                        
                        case "4":
                        dataObject.femaleInfectionCount=rows[i][j];
                        break;
                        
                        case "5":
                        dataObject.femalePercentage=rows[i][j];
                        break;
                        
                        case "6":
                        dataObject.femalePer100k=rows[i][j];
                        break;
                        
                        case "7":
                        dataObject.totalInfectionCount=rows[i][j];
                        break;
                        
                        case "8":
                        dataObject.totalPercentage=rows[i][j];
                        data.push(dataObject);
                        break;
                        
                    }
                }
            }
        }
        return data;
}
function handleKantone(rows) {
        let data = [];
        let dataObject = {};
        for (i in rows){
            dataObject = new Object();
            for (j in rows[i]){
                if(i>=7 && i<=33){
                    switch (j) {
                        case "0":
                        dataObject.canton=rows[i][j];
                        break;
                        case "1":
                        dataObject.infectionCount=rows[i][j];
                        break;
                        case "2":
                        dataObject.per100k=rows[i][j];
                        data.push(dataObject);
                        break;
                    }
                }
            }
        }
        return data;
    }
    function hanldeHospit(rows) {
            let data = [];
            let dataObject = {};
            for (i in rows){
                dataObject = new Object();
                for (j in rows[i]){
                     if(i>=7 && i<=15){
                        switch (j) {
                            case "0":
                            dataObject.age=rows[i][j];
                            break;
                            case "1":
                            dataObject.maleHospitalized=rows[i][j];
                            break;
                            case "2":
                            dataObject.femaleHospitalized=rows[i][j];
                            break;
                            case "3":
                            dataObject.TotalHospitalized=rows[i][j];
                            data.push(dataObject);
                            break;
                        }
                    }
                }
            }
            return data;
    }
    function handleTod(rows) {
            let data = [];
            let dataObject = {};
            for (i in rows){
                dataObject = new Object();
                for (j in rows[i]){
                     if(i>=7 && i<=12){
                        switch (j) {
                            case "0":
                            dataObject.age=rows[i][j];
                            break;
                            case "1":
                            dataObject.maleDeaths=rows[i][j];
                            break;
                            case "2":
                            dataObject.femaleDeaths=rows[i][j];
                            break;
                            case "3":
                            dataObject.TotalDeaths=rows[i][j];
                            data.push(dataObject);
                            break;
                        }
                    }
                }
            }
            return data;
    }
    
    
    exports.handleEpiKurve = handleEpiKurve;
    exports.handleAltersVerteilung = handleAltersVerteilung;
    exports.handleKantone = handleKantone;
    exports.hanldeHospit = hanldeHospit;
    exports.handleTod = handleTod;