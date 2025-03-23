const request = require("supertest");
const app = require("../app");
const { Task } = require("../models");

beforeAll(async () => {
    await Task.create({
        title: "Task 1",
        description: "This is task 1",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
    });
});
afterAll(async () => {
    await Task.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
    });
});

// jest.mock("../models", () => ({
//     Task: {
//         create: jest.fn(),
//         findAll: jest.fn(),
//     },
// }));
describe("/tasks", () => {
    // Describe what you are testing
    test("GET /tasks should return 200", async () => {
        // Test if the response is "Hello World!"

        const response = await request(app).get("/tasks");

        console.log(response.status, "<< hello?");
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("description");
        expect(response.body[0]).toHaveProperty("status");
    });

    test("GET /tasks internal server error 500", async () => {
        // Test if the response is "Hello World!"
        // Task.findAll.mockRejectedValue(new Error("Internal Server Error"));
        const findAllMock = jest
            .spyOn(Task, "findAll")
            .mockRejectedValue(new Error("Database Failure"));
        const response = await request(app).get("/tasks");
        // .mockRejectedValue(new Error("Internal Server Error"));

        expect(response.status).toEqual(500);
        expect(response.body).toEqual({ message: "Internal Server Error" });
        findAllMock.mockRestore();
    });
});
