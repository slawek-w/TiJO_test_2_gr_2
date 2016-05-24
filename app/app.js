(function ()
{
    'use strict';

    window.app = {
        returnOnlyLetter: function (str) {
            if (typeof str !== 'string') {
                return false;
            }
            var temp = str.split(''),
                    az = /^[a-z]/,
                    outputArray = [];

            for (var i = 0, x = temp.length; i < x; i++) {
                if (az.test(temp[i])) { //sprawdza czy kolejne znaki znajduja sie w przedziale "az"
                    outputArray.push(temp[i]);
                }
            }
            return outputArray.join('');
        },
        alphabetOrder: function (str) {
            return this.returnOnlyLetter(str.toLowerCase().split('').sort().join());
        }
    };
})();
