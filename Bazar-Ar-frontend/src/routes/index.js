import { Router } from 'express';
import path from 'path';

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Estación BazAR" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About First Node Website" });
});

router.get("/codigodeBarra", (req, res) => {
  res.render("codigodeBarra", { title: "codigodeBarra" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Pagina de contacto" });
});

router.get("/crearCuenta", (req, res) => {
  res.render("crearCuenta", { title: "Iniciar seccion" });
});


router.get("/conocenos", (req, res) => {
  res.render("conocenos", { title: "Conoce el proyecto" });
});


router.get("/index.html", (req, res) => {
  res.render("/index.html", { title: "Conoce el proyecto" });
});
// Continúa con tus otras rutas
export default router;
