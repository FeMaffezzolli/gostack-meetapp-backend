import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
	if (req.query.name) {
		return res.json({ ok: req.query.name });
	}
	return res.json({ ok: true });
});

export default routes;
