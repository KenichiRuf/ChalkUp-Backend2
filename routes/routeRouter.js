const router = require("express").Router();

const Routes = require("./routeModel");

router.get("/", async (req, res) => {
  try {
    const routes = await Routes.findAllRoutes();
    res.status(200).json({ message: "Get Routes Successful", routes: routes });
  } catch (error) {
    res.status(500).json({ message: "Could Not Get Routes", error: error });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userRoutes = await Routes.findAllRoutesBy({ userId });
    res
      .status(200)
      .json({ message: "Get userRoutes Successful", routes: userRoutes });
  } catch (error) {
    res.status(500).json({ message: "Could Not Get userRoutes", error: error });
  }
});

router.post("/", async (req, res) => {
  const route = req.body;
  try {
    const newRoute = await Routes.addRoute(route);
    res.status(201).json({ message: "Added New Route", route: newRoute });
  } catch (error) {
    res.status(500).json({ message: "Could Not Add Route", error: error });
  }
});

router.post("/userRoute", async (req, res) => {
  const userRoute = req.body;
  console.log("post");
  try {
    console.log("try");
    const newUserRoute = await Routes.addUserRoute(userRoute);
    res
      .status(201)
      .json({ message: "Added New userRoute", userRoute: newUserRoute });
  } catch (error) {
    console.log({ error, newUserRoute });
    res.status(500).json({ message: "Could Not Add userRoute", error: error });
  }
});

router.put("/userRoute/:id", async (req, res) => {
  const id = req.params.id;
  const route = req.body;
  try {
    const updatedRoute = await Routes.editUserRoute(route, id);
    res.status(201).json({ message: "Updated userRoute", route: updatedRoute });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could Not Update userRoute", error: error });
  }
});

module.exports = router;
