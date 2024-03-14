const mongoose = require("mongoose");

const getStatisticsInfo = async (req, res) => {
    const statisticData = [];

    const usersNumber = mongoose.connection.collection('users');
    const exercisesNumber = mongoose.connection.collection('exercises');
    const diariesData = mongoose.connection.collection('diaries');

    const userTotal = await usersNumber.find({}).toArray();  
    statisticData.push({userQuantity: userTotal.length});

    const exercisesTotal = await exercisesNumber.find({}).toArray(); 
    statisticData.push({ exercisesQuantity: exercisesTotal.length });
    
    const diaries = await diariesData.find({}).toArray();

  const { burnedCaloriesUsersTotal, sportTimeUsersTotal, exercisesUsersTotal } = diaries.reduce((accumulator, diary) => {
        
        const { burnedCalories, sportTime } = diary.statistic;
        const { exercises } = diary;
        
        accumulator.burnedCaloriesUsersTotal += burnedCalories;
        accumulator.sportTimeUsersTotal += sportTime;
        accumulator.exercisesUsersTotal += exercises.length;
        
        return accumulator;
        }, { burnedCaloriesUsersTotal: 0, sportTimeUsersTotal: 0, exercisesUsersTotal: 0 });

    statisticData.push({ burnedCaloriesUsersTotal }, { sportTimeUsersTotal }, { exercisesUsersTotal });  

    res.json(statisticData);
}

module.exports = getStatisticsInfo;