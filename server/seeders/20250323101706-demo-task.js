"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const tasks = [
            {
                title: "Task 1",
                description: "This is task 1",
                status: "pending",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Task 2",
                description: "This is task 2",
                status: "not started",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Task 3",
                description: "This is task 3",
                status: "completed",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Task 4",
                description: "This is task 4",
                status: "not started",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        await queryInterface.bulkInsert("Tasks", tasks, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Tasks", null, {});
    },
};
