<?php
// log visit access

function getClientIP()
{
    $ipAddress = 'UNKNOWN';
    $keys = [
        'HTTP_CLIENT_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_FORWARDED',
        'HTTP_FORWARDED_FOR',
        'HTTP_FORWARDED','REMOTE_ADDR'
    ];
    foreach($keys as $k)
    {
        if (isset($_SERVER[$k]) && !empty($_SERVER[$k]) && filter_var($_SERVER[$k], FILTER_VALIDATE_IP))
        {
            $ipAddress = $_SERVER[$k];
            break;
        }
    }
    return $ipAddress;
}

// get current get time
$dt = new DateTime('now');
$dt->setTimezone(new DateTimeZone('Europe/Madrid'));

$filename = __DIR__ . "/" . $dt->format('Y-m-d') . ".txt";

$line = $dt->format("Y-m-d H:i:s");
$line .= '   ' . getClientIP() . '   type:' . @$_GET['type'] . '   link:' . @$_GET['page'];
$line .= "\n";

file_put_contents($filename, $line, FILE_APPEND);


header("Content-Type: application/json");
echo $_GET['callback'] . '(' . "{'done' : 'ok'}" . ')';

