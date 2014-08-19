var btcvalue = false;
var ptsvalue = false;

$.ajax({ 

    url: 'scripts/btcvalue.php',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
    	var result = JSON.parse(response);
        btcvalue = parseFloat(result.return.markets.BTC.lasttradeprice);
        setPrice();
    },
    error: function(response) {
    	console.log(response.responseText);
    }

});

$.ajax({
    
    url: 'scripts/ptsvalue.php',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        var result = JSON.parse(response);
        ptsvalue = parseFloat(result.return.markets.PTS.lasttradeprice);
        setPrice();
    },
    error: function(response) {
        console.log(response.responseText);
    }

});

function setPrice() {
    if ( btcvalue !== false && ptsvalue !== false ) {
        $('.price p span').text((btcvalue*ptsvalue).toFixed(2));
    }
}