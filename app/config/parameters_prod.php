<?php

$jawsDb = parse_url(getenv('JAWSDB_MARIA_URL'));

$container->setParameter('database_driver', 'pdo_mysql');
$container->setParameter('database_host', $jawsDb['host']);
$container->setParameter('database_name', ltrim($jawsDb["path"], '/'));
$container->setParameter('database_password', $jawsDb['pass']);
$container->setParameter('database_port', null);
$container->setParameter('database_user', $jawsDb['user']);
$container->setParameter('secret', getenv('SYMFONY_SECRET'));
