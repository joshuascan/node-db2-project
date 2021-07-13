// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: 18472018,
          make: "Volkswagen",
          model: "Golf",
          mileage: 24975,
          title: "clean",
          transmission: "automatic",
        },
        {
          vin: 83650173,
          make: "BMW",
          model: "325",
          mileage: 12473,
          transmission: "manual",
        },
        {
          vin: 17693753,
          make: "Honda",
          model: "Civic",
          mileage: 34998,
          title: "salvage",
        },
        { vin: 65837401, make: "Kia", model: "Soul", mileage: 42653 },
      ]);
    });
};
