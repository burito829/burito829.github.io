let siteType,
    desing,
    aV,
    mcST, mdST,
    mcD, mdD,
    mcAV, mdAV,
    summCost, summDate
    massST = [1000, 2000, 3000, 1, 2, 3];
    massD = [4000, 6000, 8000, 1, 2, 3];
    massAV = [5000, 10000, 15000, 1, 2, 3];

do {
siteType = prompt("Введите тип сайта: Визитка, Новостной, Каталог" );
    if( siteType != "Визитка" && siteType != "Новостной" && siteType != "Каталог")
    {
        alert("Введённого типа сайта среди предложенных нет!");
    }
    else
        {
            siteType = siteType;
        }
}
while( siteType != "Визитка" && siteType != "Новостной" && siteType != "Каталог" )

do {
desing = prompt( "Введите стиль сайта: Класический, Корпоративный, Ретровейв" );
    if( desing != "Класический" && desing != "Корпоративный" && desing != "Ретровейв")
    {
        alert("Введённого типа сайта среди предложенных нет!");
    }
    else
        {
            desing = desing;
        }
}
while( desing != "Класический" && desing != "Корпоративный" && desing != "Ретровейв" )

do {
aV = prompt( "Введите стиль сайта: Резиновый, Перенос блоков, Панели" );
    if( aV != "Резиновый" && aV != "Перенос блоков" && aV != "Панели")
    {
        alert("Введённого типа сайта среди предложенных нет!");
    }
    else
        {
            aV = aV;
        }
}
while( aV != "Резиновый" && aV != "Перенос блоков" && aV != "Панели" )

if (siteType == "Визитка"){
    mcST = massST[0];
    mdST = massST[3];
    }
    else{
        if(siteType == "Новостной"){
            mcST = massST[1];
            mdST = massST[4];
        }
        else{
            mcST = massST[2];
            mdST = massST[5];
        }
    }

if (desing == "Класический"){
    mcD = massD[0];
    mdD = massD[3];
    }
    else{
        if(desing != "Корпоративный"){
            mcD = massD[1];
            mdD = massD[4];
        }
        else{
            mcD = massD[2];
            mdD = massD[5];
        }
    }

if (aV == "Резиновый"){
    mcAV = massAV[0];
    mdAV = massAV[3];
    }
    else{
        if(aV == "Перенос блоков"){
            mcAV = massAV[1];
            mdAV = massAV[4];
        }
        else{
            mcAV = massAV[2];
            mdAV = massAV[5];
        }
    }
summCost = mcST + mcD + mcAV;
summDate = mdST + mdD + mdAV;

alert("Согласно поданной заявке : " + siteType + ", " + desing + ", " + aV + ". Цена составляет : " + summCost + " Сроки создания : " + summDate + "Недель");





















