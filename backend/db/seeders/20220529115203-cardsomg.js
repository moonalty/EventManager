"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          title: "Выпускной",
          body: "false",
          image:
            "https://thumb.tildacdn.com/tild3366-6161-4466-a363-653835643437/-/resize/480x/-/format/webp/4_bg2.jpg",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
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
          title: "Вечеринка у Децла дома",
          body: "false",
          image: "https://cdn.ren.tv/cache/960x540/media/img/b5/bb/b5bbf28486f5267ce4ca0062b7b98bb397a4e78c.jpg",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
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
          adress: "titty twister, 1",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //////////////////////////
        {
          title: "JAJAJAJA",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JOJOJOJO",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
          cost: 400,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "GUGUGUGUUG",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "GEGEGEGEG",
          body: "false",
          image:
            "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "XEXEXEXE",
          body: "false",
          image: 
          "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",

          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
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
          title: "Хихихихихи",
          body: "false",
          image:
            "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
          date_start: new Date(),
          date_end: new Date(),
          adress: "titty twister, 1",
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
