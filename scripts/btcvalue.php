<?php
$btc = file_get_contents('http://pubapi2.cryptsy.com/api.php?method=singlemarketdata&marketid=2');
die(json_encode($btc));
?>