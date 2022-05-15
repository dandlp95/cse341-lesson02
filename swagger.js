const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "cse341-lesson02.herokuapp.com",
  schemes: ["https"],
  tags: [
    {
      name: "Contacts",
      description:
        "All references needed to get, add, delete and edit contacts.",
    },
  ],
  definitions: {
    User: {
      firstName: "Joe",
      lastName: "Doe",
      email: "Joe_Doe@gmail.com",
      favColor: "green",
      birthDay: "01-01-1990",
    },
    Users: [{ $ref: "#/definitions/User" }],
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js", "./routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

//swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js"); // Your project's root file
});
