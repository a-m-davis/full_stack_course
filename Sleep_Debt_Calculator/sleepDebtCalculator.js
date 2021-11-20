const getSleepHours = (day) => {
    switch (day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 8;
        break; 
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealHours = getIdealSleepHours();
    if (actualSleepHours === idealHours){
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealHours){
      console.log('You got more sleep than needed.');
      let surplus = actualSleepHours - idealHours;
      console.log('Sleep surplus: ' + surplus
      + ' hours.');
    } else {
      console.log('You need to get some rest.')
      let deficit = idealHours - actualSleepHours;
      console.log('Sleep deficit: ' + deficit + ' hours.');
    }
  }
  
  calculateSleepDebt();