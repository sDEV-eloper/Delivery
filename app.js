import fastify from "fastify"
import { connectDB } from "./src/config/connect.js"
import dotenv from 'dotenv'
import { PORT } from "./src/config/config.js";
import { admin, buildAdminRouter } from "./src/config/setup.js";

dotenv.config();

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      const app = fastify();
      await buildAdminRouter(app);
      
      app.listen({ port: PORT || 3000, host: "0.0.0.0" }, (err, addr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Delivery started on http://localhost:${PORT}${admin.options.rootPath}`);
      });
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  };
  
  start();
  