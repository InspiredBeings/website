<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AuthenticationController extends Controller
{
    public function loginAction()
    {
        return $this->render('AdminBundle:Authentication:login.html.twig');
    }
}
