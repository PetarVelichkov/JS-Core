function roadRadar([speed, zone]) {
    speed = Number(speed);
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }
    function getLimit(zone) {
        switch (zone) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    }
    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else if(overSpeed <= 20) {
            return 'speeding';
        } else if (overSpeed <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
roadRadar([123, 'interstate']);


// function roadRadar([speed, area]) {
//     speed = Number(speed);
//
//     let maxMotorway = 130,
//         maxInterstate = 90,
//         maxCity = 50,
//         maxResidential = 20;
//
//     switch (area) {
//         case 'residential':
//             isOverSpeed(maxResidential);
//             break;
//         case 'city':
//             isOverSpeed(maxCity);
//             break;
//         case 'interstate':
//             isOverSpeed(maxInterstate);
//             break;
//         case 'motorway':
//             isOverSpeed(maxMotorway);
//             break;
//     }
//    
//     function isOverSpeed(param) {
//         if (speed > param) {
//             if (speed <= (param + 20)) {
//                 console.log('speeding');
//             } else if (speed <= (param + 40)) {
//                 console.log('excessive speeding');
//             } else if (speed >= (param + 40)) {
//                 console.log('reckless driving');
//             }
//         }
//     }
// }
// roadRadar([200, 'motorway']);
