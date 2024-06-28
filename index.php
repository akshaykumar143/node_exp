<?php
$count=0;
$start=time();
$i=100;
while ($i <  99999 ) {
    echo $i;
    $i++;
    if ($i % 999999999 == 0) {
        // echo  $i."=";
        // echo 
        ++$count;
        // ."==";
    }
}
$sendTt=time();

echo $count."== ".$sendTt." = ".$start .' = ' .( $sendTt - $start);
