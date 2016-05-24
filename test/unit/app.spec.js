describe('app', function ()
{
    'use strict';

    var answers = window.app;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('al4fa');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('4');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(true);
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('a1afl');
        });
     });
});
