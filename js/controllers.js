App.controller('mainCtrl', function ($scope) {


    $scope.array1 = [];
    $scope.array2 = [];

    $scope.randomize = function () {
        var val = Math.floor((Math.random() * 100) + 1);
        var val2 = Math.floor((Math.random() * 100) + 1);
        var val3 = Math.floor((Math.random() * 100) + 1);
        var val4 = Math.floor((Math.random() * 100) + 1);
        var val5 = Math.floor((Math.random() * 100) + 1);

        $scope.array1[0] = val;
        $scope.array1[1] = val2;
        $scope.array1[2] = val3;
        $scope.array1[3] = val4;
        $scope.array1[4] = val5;
        console.log('Randomized');
        $scope.array1.sort(function(a, b){return a-b});
        
    }
    $scope.randomize2 = function () {
        var val = Math.floor((Math.random() * 100) + 1);
        var val2 = Math.floor((Math.random() * 100) + 1);
        var val3 = Math.floor((Math.random() * 100) + 1);
        var val4 = Math.floor((Math.random() * 100) + 1);
        var val5 = Math.floor((Math.random() * 100) + 1);

        $scope.array2[0] = val;
        $scope.array2[1] = val2;
        $scope.array2[2] = val3;
        $scope.array2[3] = val4;
        $scope.array2[4] = val5;
        console.log('Randomized2');
        $scope.array2.sort(function(a, b){return a-b});
    }
       
    $scope.merge = function () {
    var arr1 = $scope.array1;
var arr2 = $scope.array2;
$scope.spike = mergeSortedArray(arr1, arr2);
   

    function mergeSortedArray(a, b) {
        var merged = [],
            aElm = a[0],
            bElm = b[0],
            i = 1,
            j = 1;

        if (a.length == 0)
            return b;
        if (b.length == 0)
            return a;
               
   
        while (aElm || bElm) {
            if ((aElm && !bElm) || aElm < bElm) {
                merged.push(aElm);
                aElm = a[i++];
            } else {
                merged.push(bElm);
                bElm = b[j++];
            }
        }
        return merged;
    }
    }

});
