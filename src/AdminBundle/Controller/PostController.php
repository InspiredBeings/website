<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class PostController extends CrudController
{
    protected $_entity = 'WebBundle:Post';

    public function indexAction(Request $request)
    {
        return $this->render('AdminBundle:Post:index.html.twig', [
            'isPage' => $request->query->get('isPage'),
            'entities' => parent::findAll($request),
        ]);
    }
}
