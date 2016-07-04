<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

abstract class CrudController extends Controller
{
    protected function findAll($request)
    {
        $query = $request->query;
        $repository = $this->getDoctrine()->getRepository($this->_entity);
        $entities = $repository->findAll(
            [$query->get('orderBy') => $query->get('orderDesc')]
        );

        return $entities;
    }

    public function indexAction(Request $request)
    {
        return $this->render($this->_indexView, [
            'entities' => $this->findAll($request),
        ]);
    }
}
