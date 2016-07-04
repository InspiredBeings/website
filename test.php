<?php

$jawsDb = parse_url(getenv('JAWSDB_MARIA_URL'));
echo $jawsDb['host'] . '\n';
echo $jawsDb['user'] . '\n';
echo $jawsDb['pass'] . '\n';
echo substr($jawsDb["path"], 1);
