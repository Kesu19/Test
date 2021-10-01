$(function(){
    $('[id*=pays-').on('click',function(){
        console.log($(this));
        let region = $(this);
        let regionId = $(this)[0].id;
        let allRegion = $('[id*=pays-');

        allRegion.css('fill','#000000');

        region.css('fill','#ff0000');
        

        regionId = regionId.replace('pays-','');

        let boucle = true;

        do{
            regionId = regionId.replace('-',' ');
            if(regionId.indexOf('-')==-1){
                boucle=false;
            }
        }while(boucle)

        $('#infosPaysSel').text("Pays selectionner : "+regionId+"");


    });
})

function displayName(name) {
    document.getElementById('country-name').firstChild.data ='Pays parcourue: ' +name;
}
