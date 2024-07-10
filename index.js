const customsPayments = {
  disposal: 0,
  glonass: 0,
  customsDuty: 0,
  exciseDuty: 0,
  VAT: 0,
}

document.addEventListener('DOMContentLoaded', () => {	
  // Данные для рассчета
  const dataCalc = {
    country: '',
    priceCurrency: 0,
    releaseAuto: 0,
    engineVolume: 0,
    enginePower: 0,
    engineType: '',
    typePerson: '',
  }

  // Кнопка рассчета
  document.getElementById("id_count_cost").addEventListener("click", funcPreload);

  // Определение значений в полях
  function funcPreload () {
    dataCalc.country = document.getElementById("id_exporting_country").value;
    dataCalc.priceCurrency = Number(document.getElementById("id_price_currency").value);
    dataCalc.releaseAuto = Number(document.getElementById("id_year_release").value);
    dataCalc.engineVolume = Number(document.getElementById("id_engine_volume").value);
    dataCalc.enginePower = Number(document.getElementById("id_engine_power").value);
    dataCalc.engineType = document.getElementById("id_engine_type").value;
    dataCalc.typePerson = document.getElementById("id_type_person").value;


    customsСalculator(dataCalc.country, dataCalc.priceCurrency, dataCalc.releaseAuto, dataCalc.engineVolume, dataCalc.enginePower, dataCalc.engineType, dataCalc.typePerson);
  }

  // Создание сводки расчётов
  function tableCost (сostAuto, recyclingColl, duty, totalAmount) {
    if (document.getElementById('tableCost')) {
      document.getElementById('tableCost').remove();
    }

    var tableCost = document.createElement('div');
    tableCost.setAttribute('id', 'tableCost');
    document.querySelector('.total').appendChild(tableCost);

    var divCost = document.createElement('div');
    divCost.innerHTML = сostAuto;

    var divRecycling = document.createElement('div');
    divRecycling.innerHTML = recyclingColl;

    var divDuty = document.createElement('div');
    divDuty.innerHTML = duty;

    var divTotal = document.createElement('div');
    divTotal.innerHTML = totalAmount;

    tableCost.appendChild(divCost);
    tableCost.appendChild(divRecycling);
    tableCost.appendChild(divDuty);
    tableCost.appendChild(divTotal);
  }
  
  // Главная функция
  function customsСalculator (country, priceCurrency, releaseAuto, engineVolume, enginePower, engineType, typePerson) {
    const finalCost = {
      costAuto: 0,
      recylingColl: 0,
      duty: 0,
      totalAmount: 0,
    }
    console.log(country, priceCurrency, releaseAuto, engineVolume, enginePower, engineType, typePerson);

    if (true) {
      
    }

    tableCost(finalCost.costAuto, finalCost.recylingColl, finalCost.duty, finalCost.totalAmount);
  }
});