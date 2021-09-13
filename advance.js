/* 1. Given a string (as a parameter), return the character that is most commonly used. */

function commonlyUsed(str) {
    let arr1 = str.split('')
    let mf = 1;
    let m = 0;
    let item;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    return ` ${mf} Times repeated ${item}`
}
console.log(commonlyUsed('mmmmmaaaaaaannnnnnnnnss'))