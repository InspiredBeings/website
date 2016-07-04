<?php

namespace AdminBundle\Controller;

class UserController extends CrudController
{
    protected $_entity = 'WebBundle:User';
    protected $_indexView = 'AdminBundle:User:index.html.twig';
}
