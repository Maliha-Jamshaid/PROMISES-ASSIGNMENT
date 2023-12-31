
function rollLudoDice(callback) 
{
    const diceOutcomes = [1, 2, 3, 4, 5, 6];

    const promise = new Promise((resolve, reject) => 
    {
      setTimeout(() => 
      {
        const randomIndex = Math.floor(Math.random() * diceOutcomes.length);
        const diceResult = diceOutcomes[randomIndex];
        resolve(diceResult);
      }, 2000); 
    });
  
    if (callback && typeof callback === 'function') 
    {
      promise.then(result => callback(null, result))
             .catch(error => callback(error, null));
    }
  
    return promise;
  }

  module.exports = {
    rollLudoDice,
  };
  