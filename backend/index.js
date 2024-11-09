import debug from "debug";
import exress from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import socketHandler from "./socket/index.js";
import "./db/connect.js";

const log = debug("myapp");

//routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import ChatRoute from "./routes/ChatRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import MessageRoute from "./routes/MessageRoute.js";

const app = exress();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//MIDDLEWARES
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//serving images into public folder
app.use(exress.static("public"));
app.use("/images", exress.static("images"));

app.use(cors());
app.use(cookieParser());

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/chat", ChatRoute);
app.use("/api/post", PostRoute);
app.use("/api/upload", UploadRoute);
app.use("/api/message", MessageRoute);
//intergrage socket.io with server
socketHandler(io);

const PORT = process.env.PORT | 3250;
app.listen(PORT,() => console.log(`Server started on port ${PORT}`)
);
log("Debugging started...");