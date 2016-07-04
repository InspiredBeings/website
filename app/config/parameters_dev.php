<?php

$container->setParameter('database_driver', 'pdo_mysql');
$container->setParameter('database_host', 'localhost');
$container->setParameter('database_name', 'inspiredbeings');
$container->setParameter('database_password', null);
$container->setParameter('database_port', null);
$container->setParameter('database_user', 'root');
$container->setParameter('secret', 'ThisTokenIsNotSoSecretChangeIt');
$container->setParameter('mailer_transport', 'smtp');
$container->setParameter('mailer_host', '127.0.0.1');
$container->setParameter('mailer_user', null);
$container->setParameter('mailer_password', null);
