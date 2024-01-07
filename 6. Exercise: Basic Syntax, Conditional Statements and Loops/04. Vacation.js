function vacation(group, type, day){
    let pricePerP = 0;

    switch (day) {
        case 'Friday':
            if (type == 'Students'){
                pricePerP = 8.45;
            }else if (type == 'Business'){
                pricePerP = 10.90;
            }else if (type == 'Regular'){
                pricePerP = 15;
            }
            break;
    }

    switch (day) {
        case 'Saturday':
            if (type == 'Students'){
                pricePerP = 9.80;
            }else if (type == 'Business'){
                pricePerP = 15.60;
            }else if (type == 'Regular'){
                pricePerP = 20;
            }
            break;
    }

    switch (day) {
        case 'Sunday':
            if (type == 'Students'){
                pricePerP = 10.46;
            }else if (type == 'Business'){
                pricePerP = 16;
            }else if (type == 'Regular'){
                pricePerP = 22.50;
            }
            break;
    }

    let totalPrice = group * pricePerP;
    
    if (type == 'Students' && group >= 30) {
        totalPrice *= 0.85;
    }else if (type == 'Business' && group >= 100){
        let discountPrice = 10 * pricePerP;
        totalPrice -= discountPrice;
    }else if (type == 'Regular' && (group >= 10 && group <= 20)) {
        totalPrice *= 0.95;
    }
    

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation (30, "Students", "Sunday");