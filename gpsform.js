var restaurantdictionary = {
    1: {NAME: "Oyster1", ZIPCODE: 11234, ADDRESS: 'someplace', PHONE: '7181231234', RATING: 1, PICTURE: 'http://img1.10bestmedia.com/Images/Photos/34867/swan-oyster-depot-san-francisco-ca-usa-restaurants-seafood-american-seafood-1552475_54_990x660_201406011147.jpg'},
    2: {NAME: "Oyster2", ZIPCODE: 11235, ADDRESS: "someplace2", PHONE: '7181231231', RATING: 2, PICTURE: 'http://img1.10bestmedia.com/Images/Photos/34867/swan-oyster-depot-san-francisco-ca-usa-restaurants-seafood-american-seafood-1552475_54_990x660_201406011147.jpg'},
    3: {NAME: "Oyster3", ZIPCODE: 32145, ADDRESS: "someplace3", PHONE: '7181231238', RATING: 3, PICTURE: 'http://img1.10bestmedia.com/Images/Photos/34867/swan-oyster-depot-san-francisco-ca-usa-restaurants-seafood-american-seafood-1552475_54_990x660_201406011147.jpg'},
    4: {NAME: "Oyster4", ZIPCODE: 61734, ADDRESS: "someplace4", PHONE: '7181231230', RATING: 4, PICTURE: 'http://img1.10bestmedia.com/Images/Photos/34867/swan-oyster-depot-san-francisco-ca-usa-restaurants-seafood-american-seafood-1552475_54_990x660_201406011147.jpg'},
};




function findZip(zipthing) {
var i = 1;
var answer = 500000;
 do{
        if (Math.abs(restaurantdictionary[i]['ZIPCODE'] - parseInt(zipthing)) < Math.abs(answer - parseInt(zipthing)))
        {
    answer = restaurantdictionary[i]['ZIPCODE'];
     i++;
        }
        else {
            i++;};
            }
while (i < Object.keys(restaurantdictionary).length + 1 );
return answer;
};

function getName(zipcode) {
    var d = 1
    do{
        if (restaurantdictionary[d]['ZIPCODE'] == zipcode){
            return restaurantdictionary[d]["NAME"] 
        }
        else {
            d++;
        };
        
    }
        while (d < Object.keys(restaurantdictionary).length + 1);
    
}
function getAddress(zipcode) {
    var d = 1
    do{
        if (restaurantdictionary[d]['ZIPCODE'] == zipcode){
            return restaurantdictionary[d]["ADDRESS"] 
        }
        else {
            d++;
        };
        
    }
        while (d < Object.keys(restaurantdictionary).length + 1);
    
}

function getPhone(zipcode) {
    var d = 1
    do{
        if (restaurantdictionary[d]['ZIPCODE'] == zipcode){
            return restaurantdictionary[d]["PHONE"] 
        }
        else {
            d++;
        };
        
    }
        while (d < Object.keys(restaurantdictionary).length + 1);
    
}

function getPicture(zipcode) {
    var d = 1
    do{
        if (restaurantdictionary[d]['ZIPCODE'] == zipcode){
            return restaurantdictionary[d]["PICTURE"] 
        }
        else {
            d++;
        };
        
    }
        while (d < Object.keys(restaurantdictionary).length + 1);
    
}

function getRating1(zipcode) {
    var d = 1
    do{
        if (restaurantdictionary[d]['ZIPCODE'] == zipcode){
         return restaurantdictionary[d]["RATING"];
        }
        else {
            d++;
        };
        
    }
        while (d < Object.keys(restaurantdictionary).length + 1);
    
}

function repeat(s, n){
    var a = [];
    while(a.length < n){
        a.push(s);
    }
    return a.join('');
}

function getRating2(rating) {
    var starRating = "<img height='18px' src='https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Gold.png'>";
    return repeat(starRating, parseInt(rating));
}
function generatePage(zipcode, restaurantname, address, phone, picture, rating) {
    document.getElementById('first').innerHTML = 
"<center>The closest Oyster Restaurant to you is " + restaurantname + "!<br>\
<img style='border:2px solid indigo' height='200px' src=" + picture + "><br>The address is: " + address + "\
<br> The phone number is: " + phone + "<br>The rating is: " + rating
}

function findpage() {
    document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
    if(key == 13 || key == 3){
     //  myFunc1();
     document.formthing.submit();
    }
    };
    
    var zipcode = document.getElementById('formzip').value;
    var zipAnswer = findZip(zipcode);
    var nameAnswer = getName(zipAnswer);
    var addressAnswer = getAddress(zipAnswer);
    var phoneAnswer = getPhone(zipAnswer);
    var pictureAnswer = getPicture(zipAnswer);
    var ratingAnswer1 = getRating1(zipAnswer);
    var ratingAnswer = getRating2(ratingAnswer1);
    generatePage(zipAnswer, nameAnswer, addressAnswer, phoneAnswer, pictureAnswer, ratingAnswer);
    //generatePage(answer1);
    }
