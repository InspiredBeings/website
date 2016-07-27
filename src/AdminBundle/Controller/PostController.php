<?php

namespace AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use AdminBundle\Entity\Post;
use AdminBundle\Form\PostType;

class PostController extends CrudController
{
    protected $_entity = 'AdminBundle:Post';

    public function indexAction(Request $request)
    {
        return $this->render('AdminBundle:Post:index.html.twig', [
            'isPage' => $request->query->get('isPage'),
            'entities' => parent::findAll($request),
        ]);
    }

    public function addOrEditAction(Request $request)
    {
        $isPage = $request->query->get('isPage');
        $postId = $request->query->get('postId');

        // var_dump($request->query->get('isPage'));
        // var_dump($request->query->get('sdfadsfsda'));
        // var_dump($postId);
        // exit();

        if (is_null($postId)) {
            $post = new Post();
        } else {
            $repository = $this->getDoctrine()->getRepository($this->_entity);
            $post = $repository->find($postId);
        }

        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $post->setIsPage($isPage);

            $manager = $this->getDoctrine()->getManager();
            $manager->persist($post);
            $manager->flush();

            $this->addFlash(
                'success',
                'Your post has been created.'
            );

            return $this->redirectToRoute('posts');
        }

        return $this->render('AdminBundle:Post:form.html.twig', [
            'isPage' => $isPage,
            'form' => $form->createView(),
            'postId' => $postId,
        ]);
    }
}
