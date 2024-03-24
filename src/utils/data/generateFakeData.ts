import { faker } from "@faker-js/faker";

const generateFakeData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      location: faker.address.city() + ", " + faker.address.country(),
      phone: faker.phone.number(),
    });
  }
  return data;
};

export default generateFakeData;
