function countOccurrences([str, text]) {
    let index = text.indexOf(str);
    let count = 0;
    while (index != -1){
        count++;
        index = text.indexOf(str, index + 1);
    }
    console.log(count);
}
countOccurrences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']);
