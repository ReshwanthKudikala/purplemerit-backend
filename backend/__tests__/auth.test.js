require("dotenv").config();

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let token;


describe("Auth & User API", () => {
  beforeAll(async () => {
    process.env.NODE_ENV = "test";
    await connectDB();
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should signup a new user", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        fullName: "Test User",
        email: "testuser@test.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();

    token = res.body.token;
  });

  it("should login an existing user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@test.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should block access to protected route without token", async () => {
    const res = await request(app).get("/api/users/me");
    expect(res.statusCode).toBe(401);
  });

  it("should allow access to protected route with valid token", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should block admin route for non-admin user", async () => {
    const res = await request(app)
      .get("/api/admin/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(403);
  });
});
