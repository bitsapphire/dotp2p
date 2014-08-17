<?php
$pts = file_get_contents('http://pubapi2.cryptsy.com/api.php?method=singlemarketdata&marketid=119');
die(json_encode($pts));
?>