"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          title: "John Doe",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "Khabarovsk",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Don Joe",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "Saratov",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
