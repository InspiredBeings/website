<?php

namespace AdminBundle\Controller;

class UserController extends CrudController
{
    protected $_entity = 'AdminBundle:User';
    protected $_indexView = 'AdminBundle:User:index.html.twig';
}
