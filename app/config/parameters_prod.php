<?php

$jawsDb = parse_url(getenv('JAWSDB_MARIA_URL'));

$container->setParameter('database_driver', 'pdo_mysql');
$container->setParameter('database_host', $jawsDb['host']);
$container->setParameter('database_name', substr($jawsDb["path"], 1));
$container->setParameter('database_password', $jawsDb['pass']);
$container->setParameter('database_port', 3306);
$container->setParameter('database_user', $jawsDb['user']);
$container->setParameter('secret', getenv('SYMFONY_SECRET'));
$container->setParameter('mailer_transport', 'smtp');
$container->setParameter('mailer_host', '127.0.0.1');
$container->setParameter('mailer_user', null);
$container->setParameter('mailer_password', null);

$container->setParameter('assets_fingerprint', 'ef19c774-134f-42aa-aa42-8cc04337fcc8');
