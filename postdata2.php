<?php
    
    
    $keys = array('date','alive','dead');
    print_r($keys);
    $csv_line = array();
    foreach($keys as $key){
        array_push($csv_line,'' . $_GET[$key]);
    }
    $fname = 'val1.csv';
    var_dump($csv_line);
    $csv_line = implode(',',$csv_line);
    if(!file_exists($fname)){$csv_line = "\r\n" . $csv_line;}
    $fcon = fopen($fname,'a');
    $csv_line = "\r\n" . $csv_line;
    $fcontent = $csv_line;
    fwrite($fcon,$csv_line);
    fclose($fcon);
    header('Location:https://fantasticfour-dhruv857.c9users.io/final%20project/progressionform.html')
?>