const determineTimeOfDay = (vremechko) => {
        if(vremechko >=6 && vremechko <12) return "утро";
        if(vremechko >=12 && vremechko <18) return "день";
        if(vremechko >=18 && vremechko <22) return "вечер";
        if((vremechko >=22 && vremechko <24)||(vremechko >=0 && vremechko <6)) return "ночь";
        return "ошибка данных";
     };
    
    export { determineTimeOfDay };