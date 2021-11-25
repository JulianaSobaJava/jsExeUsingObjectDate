const data = new Date();
 const h2 = document.querySelector('.dataLocal h2');
 const mostraHora = document.querySelector('.timer p')



function addZero(valor){
    return (valor>10) ? valor : `0${valor}`
}

   function findDayOfWeek(valor){
          switch(valor){
              case 0: return 'Domingo';
              case 1: return 'Segunda-Feira';
              case 2: return 'Terça-Feira';
              case 3: return 'Quarta-Feira';
              case 4: return 'Quinta-Feira';
              case 5: return 'Sexta-Feira';
              case 6: return 'Sábado';
          }
   }
   function showMonths(valor){
    switch(valor){
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}

    function localeTime(data){
        
          let diaDaSemana = findDayOfWeek(data.getDay());
          let dia = addZero(data.getDate());
          let mes = showMonths(data.getMonth());
          let ano = data.getFullYear();

          return (`${diaDaSemana}, ${dia} de ${mes} de ${ano}`);
    }

    setInterval(()=>{
        mostraHora.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
      
    h2.innerHTML = localeTime(data).toString();

 
     



