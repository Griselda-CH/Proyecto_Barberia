
import { Route, Router } from "express"
const router= Router()

router.get('/home', (req, res) => res.render('home', {title: 'BarberGrisziel'}))
router.get('/nosotros', (req, res) => res.render('nosotros', {title: 'Sobre nosotros'}))
router.get('/servicios', (req, res) => res.render('servicios', {title: 'servicios'}))
router.get('/ubicacion', (req, res) => res.render('ubicacion', {title: 'ubicacion'}))
router.get('/login', (req, res) => res.render('login', {title: 'login'}))

export default router