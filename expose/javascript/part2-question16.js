for (let stat in statistics)
    {
    if (statistics[stat] % 2 == 1 || stat.startsWith('r'))
        {
        console.log(statistics[stat]);
        }
    }