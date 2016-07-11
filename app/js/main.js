$(document).ready(function() {
  //PROBLEM 1
  $('.problem1').click(function() {
    var testNum = $('#multiple').val();
    // MULTIPLE OF 3 AND 5 FUNCTION
    var multiple = function(num) {
      var sum = 0;

      for (i = 0; i<num; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
          sum += i
        }
      }

      return sum;
    }
    $(this).closest('.problem').find('.result').text(multiple(testNum));
    $(this).closest('.problem').find('.btn-container').slideDown('fast');
  });


  //PROBLEM 2
  $('.problem2').click(function() {
    var testNum = $('#fib').val();
    // EVEN FIB
    var fib = function(num) {
      var sum = 0,
          first = 0,
          second = 1,
          even = 0;

      while (sum < num) {
        sum = first + second;
        first = second;
        second = sum
        if (sum % 2 === 0) {
          even += sum;
        }
      };

      return even;
    }

    $(this).closest('.problem').find('.result').text(fib(testNum));
    $(this).closest('.problem').find('.btn-container').slideDown('fast');
  });
  //PROBLEM 3
  $('.problem3').click(function() {
    var testNum = $('#prime').val();
    // MULTIPLE OF 3 AND 5 FUNCTION
    var prime = function(num) {
      var prime = 0;
      var max = 10000;
      var counter = 0;
      var primeList = [];

      //PRIME NUMBER

      for (i = 3; i < max; i++) {
          if (counter === 0) {
              primeList.push(i - 1);
          }
          counter = 0;
          for (j = 2; j < i; j++) {
              if (i % j === 0) {
                  counter++;
              }
          }
      }

      var primeFactor = testNum;
      var largestPrime = 0;

      for (i = 0; i < primeList.length; i++) {
          while (primeFactor % primeList[i] === 0) {
            primeFactor = primeFactor / primeList[i];
            largestPrime = primeList[i];
          }
      }
      return largestPrime;
  }
    $(this).closest('.problem').find('.result').text(prime(testNum));
    $(this).closest('.problem').find('.btn-container').slideDown('fast');
  });

  $('.btn-info').click(function() {
    $(this).closest('.problem').find('.code').slideToggle('slow');
  });
});
