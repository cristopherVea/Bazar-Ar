import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Bazar RA" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About First Node Website" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Pagina de contacto" });
});

export default router;
